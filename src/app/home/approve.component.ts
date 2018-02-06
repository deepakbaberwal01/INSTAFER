import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var ss:any;
declare var $:any;
declare var incToken:any;

@Component({
  templateUrl: 'approve.component.html'
})
export class ApproveComponent {

  constructor() {  //ss();//wallet.setSeed();
  }

 approve(){
  console.log($("#approveAddress").val());
  console.log($("#approveAmount").val());
  var args = $("#approveAddress").val() +","+$("#approveAmount").val();
  incToken("approve",args);
//   $("#approvebtn").click(function() {

//          INCTokenC.approve($("#approveaddress").val(),$("#approveamount").val(),function(error, result){
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
