// Optimized Image
import { NgOptimizedImage } from '@angular/common';
// Component, DI
import { Component, inject } from '@angular/core';
//SEO > View Source
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  //DI
  private meta = inject(Meta);
  //Add SEO > Meta
  ngOnInit(): void {
    this.meta.addTag({
      title: 'Home - Stock Management',
      keywords: 'stock management',
      content: 'Stock Management is a simple web application that allows you to manage your stock.',
    });
  }
}
