import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var USDXCall:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'ratesetusdx.component.html'
})
export class RatesetusdxComponent {

  constructor() { //ss();//wallet.setSeed();
}
rateSet(){

    console.log($("#ratesetamount").val());
    var args = $("#ratesetamount").val();
    USDXCall("rateSet",args);
    

//   $("#ratesetusdxbtn").click(function() {
//           console.log($("#ratesetamount").val());
//          INCTokenC.ratesetusdx($("#ratesetamount").val(),function(error, result){
//              
//              else
//                  console.error(error);
//          });
//      });
    }
}
