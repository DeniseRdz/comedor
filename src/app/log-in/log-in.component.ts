import { Component, OnInit } from '@angular/core';
import { IUserModel } from '../interface/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() {



   }

    donn : IUserModel = {
    age : 1,
    avatar : "asdfasdf",
    favDish :"fasdfasd",
    gender:"fasdfasd",
    lastName:"asdfasd",
    mail:"fasdfasd",
    name:"asdfasd",
    userId:"asdfasdf",
  };

  ngOnInit() {
  }
  
}
