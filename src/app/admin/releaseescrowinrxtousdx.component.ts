import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'releaseescrowinrxtousdx.component.html'
})
export class ReleaseescrowinrxtousdxComponent {

  constructor() {
    //ss();//wallet.setSeed();
   }
  releaseescrowinrxtousdx(){

    console.log($("#releaseescowinrxtousdxid1").val());
    console.log($("#releaseescowinrxtousdxid2").val());
    console.log($("#releaseescowinrxtousdxsender").val());
    console.log($("#releaseescowinrxtousdxreceiver").val());
    var args = $("#releaseescowinrxtousdxid1").val()+","+$("#releaseescowinrxtousdxid2").val()+","+$("#releaseescowinrxtousdxsender").val()+","+$("#releaseescowinrxtousdxreceiver").val();
    incToken("releaseEscrowINRXtoUSDX",args);




//   $("#transferbtn").click(function() {
//          console.log($("#releaseescowinrxtousdxid1").val());
//          console.log($("#releaseescowinrxtousdxid2").val());
//          console.log($("#releaseescowinrxtousdxsender").val());
//          console.log($("#releaseescowinrxtousdxreceiver").val());

         
//          INCTokenC.releaseEscrowINRXtoUSDX($("#releaseescowinrxtousdxid1btn").val(),$("#releaseescowinrxtousdxid2").val(),$("#releaseescowinrxtousdxsender").val(),$("#releaseescowinrxtousdxreceiver").val(),function(error, result){
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
