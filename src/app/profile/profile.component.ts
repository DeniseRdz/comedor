import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { IUserModel } from '../interface/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

//#region Bindings var

name:string;
lastName:string;
age:number;

userId:string;

userInformation;

//#endregion

  constructor(public userService: UserService) {

      this.userId = localStorage.getItem('Suscribe');

      const preview = this.userService.getUserByUserId(this.userId);
      preview.valueChanges().subscribe((result:IUserModel) => {

      this.name=result.name;
      this.lastName=result.lastName;
      this.age=result.age;  

    });

   }

  ngOnInit() {
  }
  UpdateUser(){
    this.userInformation={
      userId:this.userId,
        name: this.name ,
        lastName: this.lastName ,
        age: this.age
    };

   

    const preview = this.userService.updateUser(this.userInformation);
    preview.then(() => {
      alert('Usuario Actualizado con  Exito!');
    }).catch( (error) => {
      alert('hubo pedo!');
      console.log(error);
    });


  }

}
