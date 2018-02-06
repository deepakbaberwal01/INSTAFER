import { Component } from '@angular/core';
import * as wallet from 'wallet.js';
declare var incToken:any;
declare var $:any;
declare var ss:any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: 'checkbalance.component.html'
})
export class CheckbalanceComponent {

	btntxt: String = 'Show';


  constructor() {
     // ss();//wallet.setSeed();
 }
  balanceOf(){

        console.log($("#address").val());

        var args = $("#address").val();
        incToken("balanceOf",args);


//     //$("#button").click(function() {
//         INCTokenC.balanceOf($("#address").val(),function(error, result){
//             if(!error)
//                 {
//                     $("#instructor").html(result+' INC');
//                     console.log(result);
//                 }
//             else
//                 console.error(error);
                
//         });
//     });
//     console.log("Check");
 }
 }
