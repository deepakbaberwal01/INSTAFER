import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';
import { AllowanceComponent } from './allowance.component';
import { ApproveComponent } from './approve.component';
import { CheckbalanceComponent } from './checkbalance.component';
import { TransferComponent } from './transfer.component';
import { TransferfromComponent } from './transferfrom.component';
import { SetusdxinrxcontractComponent } from './setusdxinrxcontract.component';
import { ReleaseescrowinrxtousdxComponent } from './releaseescrowinrxtousdx.component';
import { ReleaseescrowusdxtoinrxComponent } from './releaseescrowusdxtoinrx.component';
import { SetusdxcontractComponent } from './setusdxcontract.component';
import { RatesetComponent } from './rateset.component';
import { SetinrxcontractComponent } from './setinrxcontract.component';
import { RatesetusdxComponent } from './ratesetusdx.component';
//import { TestComponent } from './test.component';

import { AdminRoutingModule } from './admin-routing.module';
declare var ss:any;
import * as wallet from 'wallet.js';



@NgModule({
  imports: [
    AdminRoutingModule,
	FormsModule,
    BsDropdownModule
  ],
  declarations: [ 
AllowanceComponent,
ApproveComponent,
CheckbalanceComponent,
TransferComponent,
TransferfromComponent,
SetusdxinrxcontractComponent,
ReleaseescrowinrxtousdxComponent,
ReleaseescrowusdxtoinrxComponent,
SetusdxcontractComponent,
RatesetComponent,
SetinrxcontractComponent,
	RatesetusdxComponent



	]
})
export class AdminModule { constructor() {ss();//wallet.setSeed();
}}
