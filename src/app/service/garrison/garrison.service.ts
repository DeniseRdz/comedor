import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GarrisonService {
  
    //#region  const
    
    dataTableGarrison = 'garrison';
    slash = '/';
    list: any;
    Garrison = [];
 
   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllGarrison() {
    return this.angularFireDatabase.list(this.dataTableGarrison );
  }

}
