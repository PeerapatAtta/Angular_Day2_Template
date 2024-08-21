import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
//
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  //Add only Module
  imports: [ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //Formgroup
  loginForm!: FormGroup
  //Parameter for check submit form
  submitted = false
  //
  hide = true
  //ตัวแปรสำหรับผูกกับฟอร์ม 2-way binding
  userLogin = {
    "email": "",
    "password": ""
  }
  //Get input field by elementRef
  @ViewChild('emailInput') emailInput!: ElementRef

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
  //Toogle password function
  togglePasswordVisibility() {
    this.hide = !this.hide
  }

  submitLogin() {

    this.submitted = true

    if (this.loginForm.invalid) {
      return
    } else {
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      if (this.userLogin.email == "admin@email.com" && this.userLogin.password == "123456") {
        //alert("Login Success")
        Swal.fire({
          title: 'Login Success!',
          text: 'Welcome to the Web Application',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      } else {
        //alert("Login Fail")
        Swal.fire({
          title: 'Login Fail!',
          text: 'Please check your email and password',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

  resetForm() {
    this.submitted = false
    this.loginForm.reset()
    this.emailInput.nativeElement.focus()  //กำหนดค่า focus ให้กับ input email
  }
}
