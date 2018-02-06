import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var INRXCall:any;
declare var $:any;
declare var ss:any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: 'checkbalanceinrx.component.html'
})
export class CheckbalanceinrxComponent {

	btntxt: String = 'Show';


  constructor() {
     // ss();//wallet.setSeed();
 }
 showBalance(){

        console.log($("#checkbalanceINRXAddress").val());

        var args = $("#checkbalanceINRXAddress").val();
        INRXCall("showBalance",args);
        



 }
 }
