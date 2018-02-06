import { Component } from '@angular/core';
declare var $:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'transferFrom.component.html'
})
export class TransferFromComponent {

  constructor() { 
    //ss();//wallet.setSeed();
  }
 transferFrom(){
    console.log($("#transferFromFrom").val());
    console.log($("#transferFromTo").val());
	console.log($("#transferFromAmount").val());
	
    var args = $("#transferFromFrom").val()+","+$("#transferFromTo").val()+","+$("#transferFromAmount").val();
    incToken("transferFrom",args);

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
