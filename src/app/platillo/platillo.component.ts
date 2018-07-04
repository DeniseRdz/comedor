import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  // dishDescription = "La milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.";
  // dishName = [
  //   {"Pollo Milanesa"},
  // ];
  // filterValue=0;
  dish = [
  {image:"assets/img/pollomilanesa.jpg",description:"La1 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  {image:"assets/img/pollomilanesa.jpg",description:"La2 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  {image:"assets/img/pollomilanesa.jpg",description:"La3 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  {image:"assets/img/pollomilanesa.jpg",description:"La4 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  ];

  id:any;
  
  constructor(public activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

}

