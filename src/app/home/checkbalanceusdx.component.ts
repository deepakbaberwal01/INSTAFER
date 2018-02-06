import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var USDXCall:any;
declare var $:any;
declare var ss:any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: 'checkbalanceusdx.component.html'
})
export class CheckbalanceusdxComponent {

	btntxt: String = 'Show';


  constructor() {
     // ss();//wallet.setSeed();
 }
 showBalance(){

        console.log($("#checkbalanceUSDXAddress").val());

        var args = $("#checkbalanceUSDXAddress").val();
        USDXCall("USDXBalance",args);
        USDXCall("showBalance",args);


 }
 }
