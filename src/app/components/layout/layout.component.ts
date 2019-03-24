import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService :AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
