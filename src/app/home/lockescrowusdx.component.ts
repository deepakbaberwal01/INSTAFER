import { Component } from '@angular/core';
declare var USDXCall:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'lockescrowusdx.component.html'
})
export class LockescrowusdxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
   lockescrowusdx(){

    console.log($("#lockEscrowUSDXAddressSender").val());
     console.log($("#lockEscrowUSDXAddressReceiverAgent").val());
     console.log($("#lockEscrowUSDXAddressReceiver").val());
     console.log($("#lockEscrowUSDXAddressAmount").val());
     
     var args = $("#lockEscrowUSDXAddressSender").val()+","+$("#lockEscrowUSDXAddressReceiverAgent").val()+","+$("#lockEscrowUSDXAddressReceiver").val()+","+$("#lockEscrowUSDXAddressAmount").val();
    USDXCall("lockEscrow",args);



    }
}
