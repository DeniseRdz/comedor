import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    //#region Binding ngModel
    email:string;
    password:string;  
    //#endregion

  constructor(public router: Router, public authenticationService: AuthenticationService) {  }

  login() {

    const promise = this.authenticationService.Login(this.email, this.password);
    promise.then((data) => {

      alert('Se inicio sección');
      this.router.navigateByUrl('/home');

    }).catch((error) => {

      alert('Valio Riel');
      console.log(error);

    });

    //#region Binding ngModel " "
    this.email = '';
    this.password = '';
    //#endregion
  }

  ngOnInit() {
  }
  
}
