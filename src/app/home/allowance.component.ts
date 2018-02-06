import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var incToken:any;
declare var $:any;


@Component({
  templateUrl: 'allowance.component.html'
})
export class AllowanceComponent {
 constructor() { 
}
 allowance(){

  console.log("allowanceowner");

  // $("#allowancebtn").click(function() {
         console.log($("#allowanceowner").val());
         console.log($("#allowancespender").val());
         alert($("#allowanceowner").val()+":"+$("#allowancespender").val());
          var args = $("#allowanceowner").val() +","+$("#allowancespender").val();
         incToken("allowance",args);
        
     }
}
