import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
    //#region  const

    dataTableShopping = 'shopping';
    slash = '/';
    list: any;
    Shopping = [];

   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllShopping() {
    return this.angularFireDatabase.list(this.dataTableShopping );
  }

  async getShoppingById(userId) {

    this.Shopping = [];

   await this.angularFireDatabase.database.ref(this.dataTableShopping)
    .orderByChild('userId').equalTo(userId).on('child_added', (item) => {
      this.Shopping.push(item.val());
    });

    return this.Shopping;

  }

}
