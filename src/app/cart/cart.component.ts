import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { isNumber } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  step=1;
  closeResult: string;
  // hero:any;
  valueName:string='';
  vNameMsg:string ='';
  
  valueNumber:number=0;
  vNumberMsg:string ='';
  
  constructor(private modalService: NgbModal) {
   }

  open(content) {
    // this.modalService.open(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // alert(`Pago Realizado`);
      if(this.step==2){
      this.closeResult = `Pago Realizado`;}
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  validateName(){
    if( this.valueName.length == 0  ){
      this.vNameMsg = "Ingresar un nombre valido"
    }else{
      this.vNameMsg ='';
      this.step = 3;
      
    }
    
  }

  
  validateNumber(){
    if( this.valueNumber.toString().length == 0  ){
      this.vNumberMsg = "Ingresar un numero valido";
    }else{
      this.vNumberMsg ='';
      this.step = 3;
    }
  }

  ngOnInit() {
  }

}


