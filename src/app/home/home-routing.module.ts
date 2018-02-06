import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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





const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Agent'
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
						path: 'transferFrom',
						component: TransferFromComponent,
						data: 	{
								title: 'TransferFrom'
								}
					},
					{
						path: 'convertcurrencytousdx',
						component: ConvertcurrencytousdxComponent,
						data: 	{
								title: 'Convertcurrencytousdx'
								}
					},
					{
						path: 'convertcurrencytoinrx',
						component: ConvertcurrencytoinrxComponent,
						data: 	{
								title: 'Convertcurrencytoinrx'
								}
					},
					{
						path: 'lockescrowinrx',
						component: LockescrowinrxComponent,
						data: 	{
								title: 'Lockescrowinrx'
								}
					},
					{
						path: 'lockescrowusdx',
						component: LockescrowusdxComponent,
						data: 	{
								title: 'Lockescrowusdx'
								}
					},
					{
						path: 'withdrawasincinrx',
						component: WithdrawasincinrxComponent,
						data: 	{
								title: 'Withdrawasincinrx'
								}
					},
					{
						path: 'withdrawasincusdx',
						component: WithdrawasincusdxComponent,
						data: 	{
								title: 'Withdrawasincusdx'
								}
					},
					{
						path: 'checkbalanceinrx',
						component: CheckbalanceinrxComponent,
						data: 	{
								title: 'Checkbalanceinrx'
								}
					},
					{
						path: 'checkbalanceusdx',
						component: CheckbalanceusdxComponent,
						data: 	{
								title: 'Checkbalanceusdx'
								}
					}
					
					
				
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
