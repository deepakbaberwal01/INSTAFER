import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var USDXCall:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'convertcurrencytousdx.component.html'
})
export class ConvertcurrencytousdxComponent {

  constructor() { //ss();//wallet.setSeed();
}
 ratesetusdx(){

   
    
    console.log($("#convertCurrencyToUSDXAmount").val());

    var args = $("#convertCurrencyToUSDXAmount").val();
    USDXCall("addToCurrencyX",args);



    }
}