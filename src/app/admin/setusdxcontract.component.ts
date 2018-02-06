import { Component } from '@angular/core';
declare var INRX:any;
declare var $:any;
declare var ss:any;
declare var INCTokenC:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'setusdxcontract.component.html'
})
export class SetusdxcontractComponent {

  constructor() {
    //ss();//wallet.setSeed();
   }
   setUSDXContract(){

    console.log($("#setusdxaddressaddress").val());
    var args = $("#setusdxaddressaddress").val();
    wallet.INRX("setUSDXContract",args);

//   $("#setusdxaddressbtn").click(function() {
        
//          console.log($("#setusdxaddressaddress").val());
//          INRX.setUSDXContract($("#setusdxaddressaddress").val(),function(error, result){
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
