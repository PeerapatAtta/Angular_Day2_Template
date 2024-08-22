import { Component } from '@angular/core';
import {
  RouterOutlet,
  ActivatedRoute,
  NavigationEnd,
  Router,
} from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  //DI in Constructor
  constructor(
    private router: Router,
    private titleService: Title
  ) { }

 
  //Dynamic Title
  ngOnInit(): void {
    // Listen to router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root;
        const routeData = this.getRouteData(currentRoute);
        const title = routeData ? routeData.title : 'Stock Management';
        this.titleService.setTitle(`${title} - Stock Management`); // Update the browser tab title with the route title if available, otherwise default to 'Stock Management'                
      })
  }

  private getRouteData(route:ActivatedRoute):any {
    let data = null;
    if (route.firstChild) {
      data = this.getRouteData(route.firstChild);
    } else {
      data = route.snapshot.data;
    }
    return data;    
  }
}
