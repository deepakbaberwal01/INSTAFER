import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { FullLayoutAgentComponent } from './layouts/full-layout-agent.component';
// import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  // {
    // path: '',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
  // },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
        // path: 'dashboard',
        // loadChildren: './dashboard/dashboard.module#DashboardModule'
      // },
     
	   {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
      
    
    ]
  },
   {
    path: 'home',
    component: FullLayoutAgentComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      }
    
    ]
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
