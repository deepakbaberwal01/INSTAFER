import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';
import { AllowanceComponent } from './allowance.component';
import { ApproveComponent } from './approve.component';
import { CheckbalanceComponent } from './checkbalance.component';
import { TransferComponent } from './transfer.component';
import { TransferFromComponent } from './transferFrom.component';
import { ConvertcurrencytousdxComponent } from './convertcurrencytousdx.component';
import { ConvertcurrencytoinrxComponent } from './convertcurrencytoinrx.component';
import { LockescrowinrxComponent } from './lockescrowinrx.component';
import { LockescrowusdxComponent } from './lockescrowusdx.component';
import { WithdrawasincinrxComponent } from './withdrawasincinrx.component';
import { WithdrawasincusdxComponent } from './withdrawasincusdx.component';
import { CheckbalanceinrxComponent } from './checkbalanceinrx.component';
import { CheckbalanceusdxComponent } from './checkbalanceusdx.component';




import { HomeRoutingModule } from './home-routing.module';
import * as wallet from 'wallet.js';
declare var ss:any;




@NgModule({
  imports: [
    HomeRoutingModule,
	FormsModule,
    BsDropdownModule
  ],
  declarations: [ 
AllowanceComponent,
ApproveComponent,
CheckbalanceComponent,
TransferComponent,
TransferFromComponent,

ConvertcurrencytousdxComponent,
ConvertcurrencytoinrxComponent,
LockescrowinrxComponent,
LockescrowusdxComponent,
WithdrawasincinrxComponent,
WithdrawasincusdxComponent,
CheckbalanceinrxComponent,
CheckbalanceusdxComponent



// ,
// TransferComponent,
// TransferfromComponent,
// SetusdxinrxcontractComponent,
// ReleaseescrowinrxtousdxComponent,
// ReleaseescrowusdxtoinrxComponent,
// SetusdxcontractComponent,
// RatesetComponent,
// SetinrxcontractComponent,
	// RatesetusdxComponent



	]
})
export class HomeModule { constructor() {
	ss();//wallet.setSeed();
}}
