import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  buttonText = "";
  constructor(private route: ActivatedRoute) { 
    console.log(this.route.snapshot.routeConfig.path);
    if(this.route.snapshot.routeConfig.path === "Sign-Up") {
      this.buttonText = "Sign up";
    } else {
      this.buttonText = "Sign in"
    }
  }

  ngOnInit() {
  }

}
