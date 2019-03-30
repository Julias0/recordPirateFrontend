import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.fg = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.authService.login(
      this.fg.controls['username'].value,
      this.fg.controls['password'].value).subscribe(res => {
        this.snackBar.open("Success!",null,{
          duration: 1000
        });
        this.router.navigate(['/dashboard']);
      },err => {
        this.snackBar.open("Wrong Id/Password!!",null,{
          duration: 1000
        });
      });
  }

}
