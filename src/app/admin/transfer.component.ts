import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'transfer.component.html'
})
export class TransferComponent {

  constructor() {
    //ss();//wallet.setSeed();
   }
 transfer(){

    console.log($("#transferto").val());
    console.log($("#transferamount").val());
    var args = $("#transferto").val()+","+$("#transferamount").val();
    incToken("transfer",args);

//   $("#transferbtn").click(function() {
//          console.log($("#transferto").val());
//          console.log($("#transferamount").val());
//          INCTokenC.transfer($("#transferto").val(),$("#transferamount").val(),function(error, result){
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
