import { Component } from '@angular/core';
declare var USDXCall:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'withdrawasincusdx.component.html'
})
export class WithdrawasincusdxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
  withdrawasincusdx(){
    console.log($("#withdrawAsUSDXAmount").val());
     console.log($("#withdrawAsUSDXTorF").val());
     var args = $("#withdrawAsUSDXAmount").val()+","+$("#withdrawAsUSDXTorF").val();
    USDXCall("withdrawAsINC",args);
    }
}
