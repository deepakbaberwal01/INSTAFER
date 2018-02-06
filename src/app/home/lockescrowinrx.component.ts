import { Component } from '@angular/core';
declare var INRXCall:any;
declare var $:any;
declare var $:any;
import * as wallet from 'wallet.js';
declare var ss:any;

@Component({
  templateUrl: 'lockescrowinrx.component.html'
})
export class LockescrowinrxComponent {

  constructor() {
    ss();//wallet.setSeed();

   }
   lockescrowinrx(){

    console.log($("#lockEscrowINRXAddressSender").val());
     console.log($("#lockEscrowINRXAddressReceiverAgent").val());
     console.log($("#lockEscrowINRXAddressReceiver").val());
     console.log($("#lockEscroINRXAmount").val());
     
     var args = $("#lockEscrowINRXAddressSender").val()+","+$("#lockEscrowINRXAddressReceiverAgent").val()+","+$("#lockEscrowINRXAddressReceiver").val()+","+$("#lockEscroINRXAmount").val();
    INRXCall("lockEscrow",args);



    }
}
