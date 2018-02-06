import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'setinrxcontract.component.html'
})
export class SetinrxcontractComponent {

  constructor() {
    //ss();//wallet.setSeed();
   }
  setinrxcontract(){
    console.log($("#setinrxcontractaddress").val());
    var args = $("#setinrxcontractaddress").val();
    wallet.incToken("setinrxcontract",args);


//   $("#setinrxcontractbtn").click(function() {
         
//          console.log($("#setinrxcontractaddress").val());
//          INCTokenC.setinrxcontract($("#setinrxcontractaddress").val(),function(error, result){
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
