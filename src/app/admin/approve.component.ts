import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
declare var ss:any;
declare var incToken:any;
import * as wallet from 'wallet.js';


@Component({
  templateUrl: 'approve.component.html'
})
export class ApproveComponent {

  constructor() { //ss();//wallet.setSeed();
}
 approve(){
    console.log($("#approveaddress").val());
    console.log($("#approveamount").val());
    var args = $("#approveaddress").val() +","+$("#approveamount").val();
    incToken("approve",args);


//   $("#approvebtn").click(function() {
//          console.log($("#approveaddress").val());
//          console.log($("#approveamount").val());
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
