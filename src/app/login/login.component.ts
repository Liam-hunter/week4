import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  email = "";
  password = "";

  errorMessage = "";

  loginFormSubmission(){

    var users = [{email: "me@me.com", password: "1234"},
                {email: "another@email.com", password: "1234"},
                {email: "fake@email.com", password: "1234"}]

    // this.displayEmail = this.email;
    var emailExists = false;

    users.forEach(user => {
      if (this.email == user.email) {
        emailExists = true;
        if (this.password == user.password) {
          this.router.navigateByUrl('/account')
        }
      }
    });


    if (emailExists) {
      this.errorMessage = "Password is incorrect"
    } else if(this.email == ""){
      this.errorMessage  = "Please enter an email"
    } else {
      this.errorMessage = this.email + " is not a recognised email"
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
