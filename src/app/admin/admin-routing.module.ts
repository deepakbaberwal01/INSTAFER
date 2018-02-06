import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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




const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
					{
						path: 'allowance',
						component: AllowanceComponent,
						data: 	{
								title: 'Allowance'
								}
					},
    
	 
					{
						path: 'approve',
						component: ApproveComponent,
						data: 	{
								title: 'Approve'
								}
					},
					{
						path: 'checkbalance',
						component: CheckbalanceComponent,
						data: 	{
								title: 'Checkbalance'
								}
					},
					{
						path: 'transfer',
						component: TransferComponent,
						data: 	{
								title: 'Transfer'
								}
					},
					{
						path: 'transferfrom',
						component: TransferfromComponent,
						data: 	{
								title: 'Transferfrom'
								}
					},
					{
						path: 'setusdxinrxcontract',
						component: SetusdxinrxcontractComponent,
						data: 	{
								title: 'Setusdxinrxcontract'
								}
					},
					{
						path: 'releaseescrowinrxtousdx',
						component: ReleaseescrowinrxtousdxComponent,
						data: 	{
								title: 'releaseescrowinrxtousdx'
								}
					},
					{
						path: 'releaseescrowusdxtoinrx',
						component: ReleaseescrowusdxtoinrxComponent,
						data: 	{
								title: 'releaseescrowusdxtoinrx'
								}
					},
						{
						path: 'setusdxcontract',
						component: SetusdxcontractComponent,
						data: 	{
								title: 'Setusdxcontract'
								}
					},
					{
						path: 'rateset',
						component: RatesetComponent,
						data: 	{
								title: 'Rateset'
								}
					},
					{
						path: 'setinrxcontract',
						component: SetinrxcontractComponent,
						data: 	{
								title: 'Setinrxcontract'
								}
					},
					{
						path: 'ratesetusdx',
						component: RatesetusdxComponent,
						data: 	{
								title: 'Ratesetusdx'
								}
					}
					
				
				
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
