import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'allowance.component.html'
})
export class AllowanceComponent {

  constructor() {//ss();//wallet.setSeed();
  }
 allowance(){

    console.log($("#allowanceowner").val());
    console.log($("#allowancespender").val());
    var args = $("#allowanceowner").val() +","+$("#allowancespender").val();
    incToken("allowance",args);




//   $("#allowancebtn").click(function() {
//          console.log($("#allowanceowner").val());
//          console.log($("#allowancespender").val());
//          INCTokenC.allowance($("#allowanceowner").val(),$("#allowancespender").val(),function(error, result){
//              if(!error)
//                  {
//                      $("#instructor").html(result+' id');
//                      console.log(result);
//                  }
//              else
//                  console.error(error);
//          });
//      });
    }
}
