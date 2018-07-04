import { Component } from '@angular/core';
//#region import Router - AuthenticationService
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication/authentication.service';

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'history';
  userId: string;
  suscribeCheck;

  constructor(public router: Router, public autenticationService: AuthenticationService) {

    const promise = this.autenticationService.getStatus();

    promise.subscribe((suscribe) => {
      this.suscribeCheck = suscribe;
        if (suscribe == null) {
          this.router.navigateByUrl('/login');
        }
         localStorage.setItem('Suscribe' , suscribe.uid);
    });

  }
 
}
