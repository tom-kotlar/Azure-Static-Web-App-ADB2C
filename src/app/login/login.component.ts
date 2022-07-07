import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = [
    { provider: 'google', icon: 'bx bxl-google  bx-md', name: "Google" },
    { provider: 'twitter', icon: 'bx bxl-twitter bx-md', name: "Twitter" },
    { provider: 'facebook', icon: 'bx bxl-facebook-circle  bx-md', name: "Facebook" },
    { provider: 'aadb2c', icon: 'bx bxl-microsoft  bx-md', name: "Microsoft" },
  ];
  redirect = window.location.pathname;

  loginForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required, Validators.email],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

}
