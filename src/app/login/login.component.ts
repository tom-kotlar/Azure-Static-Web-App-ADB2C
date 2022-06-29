import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm: any
 

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
    });
  }

}
