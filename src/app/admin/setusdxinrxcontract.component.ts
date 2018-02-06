import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'setusdxinrxcontract.component.html'
})
export class SetusdxinrxcontractComponent {

  constructor() { 
    //ss();//wallet.setSeed();
  }
  setUSDXandINRXContractAddress(){

    console.log($("#setusdxinrxcontractaddressusdx").val());
    console.log($("#setusdxinrxcontractaddresinrx").val());
    var args = $("#setusdxaddressaddress").val();
    wallet.incToken("setUSDXandINRXContractAddress",args);


//   $("#setusdxinrxcontractaddresbtn").click(function() {
//          console.log($("#setusdxinrxcontractaddressusdx").val());
//          console.log($("#setusdxinrxcontractaddresinrx").val());
//          INCTokenC.setUSDXandINRXContractAddress($("#setusdxinrxcontractaddressusdx").val(),$("#setusdxinrxcontractaddresinrx").val(),function(error, result){
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
