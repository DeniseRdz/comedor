import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { StewService } from '../service/stew/stew.service';
import { GarrisonService } from '../service/garrison/garrison.service';
import { DrinkService } from '../service/drink/drink.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  step = 1 ;
  closeResult: string;
  cartArray = [];
  meal: any;
  platilosAll = [];
  stewItem: any;
  garrisonItem: any;
  drinkItem: any;

  constructor(public stewService: StewService, public drinkService: DrinkService, public router: Router,
    public garrisonService: GarrisonService, private modalService: NgbModal, public cartService: CartService) {
      this.getAllInCart();
      this.prepareMeal();
   }

  open(content) {
    // this.modalService.open(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // alert(`Pago Realizado`);
      if (this.step === 2 ) {
      this.closeResult = `Pago Realizado`;
    }
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit() {
  }

  getAllInCart() {
    this.cartArray = this.cartService.showCart();
  }

  prepareMeal() {
    this.cartArray.forEach(id => {

      const streamStew = this.stewService.getStewById(id);
      streamStew.valueChanges().subscribe((item) => {

        const streamDrink = this.drinkService.getDrinkById(id);
        streamDrink.valueChanges().subscribe((item2) => {

          const streamGarrison = this.garrisonService.getGarrisonById(id);
          streamGarrison.valueChanges().subscribe((item3) => {

            this.meal = {
            stew: item,
            drink: item2,
            garrison: item3
            };
            this.platilosAll.push(this.meal);
            console.log(this.cartArray);
            console.log(this.platilosAll);
          });
        });
        
      });

    });

  }

  goToDish(id: number) {
    this.router.navigate(['dish', id]);
  }

}


