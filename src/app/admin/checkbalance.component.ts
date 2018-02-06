import { Component } from '@angular/core';
declare var INCTokenC:any;
declare var $:any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var ss:any;
declare var INCTokenC:any;
declare var incToken:any;
import * as wallet from 'wallet.js';
@Component({
  templateUrl: 'checkbalance.component.html'
})
export class CheckbalanceComponent {

	btntxt: String = 'Show';


  constructor() { //ss();//wallet.setSeed();

  }
  balanceOf(){
    console.log($("#address").val());
    var args = $("#address").val();
    incToken("balanceOf",args);

	
	

    // $("#button").click(function() {
    //     INCTokenC.balanceOf($("#address").val(),function(error, result){
    //         if(!error)
    //             {
    //                 $("#instructor").html(result+' INC');
    //                 console.log(result);
    //             }
    //         else
    //             console.error(error);
                
    //     });
    // });
    // console.log("Check");
}
}
