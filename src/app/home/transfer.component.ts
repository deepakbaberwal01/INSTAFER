import { Component } from '@angular/core';
declare var $:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'transfer.component.html'
})
export class TransferComponent {

  constructor() { 
    //ss();//wallet.setSeed();
  }
 transfer(){
    console.log($("#transferTo").val());
    console.log($("#transferAmount").val());
    var args = $("#transferTo").val()+","+$("#transferAmount").val();
    incToken("transfer",args);


    }
}
