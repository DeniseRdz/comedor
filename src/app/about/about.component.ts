import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'http://via.placeholder.com/1300x400',
    'http://via.placeholder.com/1300x400',
    'http://via.placeholder.com/1300x400'
  ];

}
