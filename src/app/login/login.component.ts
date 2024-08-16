import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  //Add only Module
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //Formgroup
  loginForm!: FormGroup
  //Parameter for check submit form
  submitted = false
  //ตัวแปรสำหรับผูกกับฟอร์ม 2-way binding
  userLogin = {
    "email": "",
    "password": ""
  }

  //Constructor
  constructor(
    private formBuilder: FormBuilder
  ) { }

  //ngOnInit
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }
  submmitLogin() {

    this.submitted = true

    if (this.loginForm.invalid) {
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      if (this.userLogin.email == "admin@email.com" && this.userLogin.password == "123456") {
        alert("Login Success")
      } else {
        alert("Login Fail")
      }
    }
  }

  resetForm() {
    this.submitted = false
    this.loginForm.reset()    
  }
}
