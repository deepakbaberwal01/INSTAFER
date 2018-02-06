import { Component } from '@angular/core';
declare var INRXCall:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'withdrawasincinrx.component.html'
})
export class WithdrawasincinrxComponent {

  constructor() { 
      ss();//wallet.setSeed();
  }
  withdrawasincinrx(){

    console.log($("#withdrawAsINCINRXAmount").val());
     console.log($("#withdrawAsINCINRXTrueorFalse").val());
     var args = $("#withdrawAsINCINRXAmount").val()+","+$("#withdrawAsINCINRXTrueorFalse").val();
    INRXCall("withdrawAsINC",args);



    }
}
