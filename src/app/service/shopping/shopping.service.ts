import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { IShoppingModel } from '../../interface/shopping';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
    //#region  const
    
    dataTableShopping = 'shopping';
    slash = '/';
    list: any;
    Shopping  = [];
 
   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllShopping() {
    return this.angularFireDatabase.list(this.dataTableShopping );
  }


}
