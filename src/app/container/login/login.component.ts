import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {

  }
  email: string = '';
  password: string = '';
  errMsg: string = '';

  login() {
    this.errMsg = '';
    this.router.navigate(['blogs'])
    // if (this.email === 'viveek.sri@gmail.com' && this.password === 'Welcome@123') {
    //   this.router.navigate(['blogs'])
    // }
    // else {
      // this.errMsg = 'INVALID Credential'
    // }
  }
}