import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;
declare var INRXCall:any;

@Component({
  templateUrl: 'convertcurrencytoinrx.component.html'
})
export class ConvertcurrencytoinrxComponent {

  constructor() { 
   // ss();//wallet.setSeed();


  }
  addToCurrencyX(){
   
    console.log($("#convertCurrencyToINRXAmount").val());

    var args = $("#convertCurrencyToINRXAmount").val();
    INRXCall("addToCurrencyX",args);


    }
 }
