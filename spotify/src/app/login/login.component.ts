import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = null;
  password: string = null;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert("Loggeado satisfactoriamente.");
        console.log(data);
      }
    ).catch((error) => {
      alert("Ocurrio un error");
      console.log(error);
    });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then(
      (data) => {
        alert("Registrado satisfactoriamente.");
        console.log(data);
      }
    ).catch((error) => {
      alert("Ocurrio un error");
      console.log(error);
    });
  }
}
