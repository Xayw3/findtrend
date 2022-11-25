import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registerForm!: FormGroup | any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', 
        Validators.required,
        Validators.email,
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  };

  onSubmit() {
    this.submitted = true
  };
};