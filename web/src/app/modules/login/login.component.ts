import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  constructor(public router: Router){}

  ngOnInit(): void {
  }

  submit(){
    localStorage.setItem("role", this.username);

    if(this.username == 'SA'){
      this.router.navigate(['/web/service-advisor/sa-dashboard']);
    }

    if(this.username == 'JC'){
      this.router.navigate(['/web/job-controller/jc-dashboard']);
    }
  }
}
