import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  items = [{
    stew: 'Milanesa de Pollo',
    garrison: 'Pure de papa',
    price: '$80'
  },
  {
    stew: 'Asado de Res',
    garrison: 'Frijol',
    price: '$120'
  },
  {
    stew: 'Tamal de Elote',
    garrison: 'Frijol',
    price: '$75'
  },
  {
    stew: 'Langosta',
    garrison: 'Arroz',
    price: '$105'
  }];

  constructor() { }

  ngOnInit() {
  }

}
