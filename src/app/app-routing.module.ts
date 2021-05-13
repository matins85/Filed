import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component'
import { DefaultLayoutComponent } from './default-layout/default-layout.component'
import { HomeComponent } from './public-layout/home/home.component'
import { PrivateHomeComponent } from './private-layout/private-home/private-home.component'
import { Home2Component } from './public-layout/home2/home2.component';


const routes: Routes = [{
  path: '', component: DefaultLayoutComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'First', component: HomeComponent},
    {path: 'Second', component: Home2Component},
    
    // {path: '**', component: NotFoundComponent},
    // {path: '**', redirectTo: ''}
  ]},
  {
    path: '', component: DashboardLayoutComponent, children: [
      {path: 'admin', component: PrivateHomeComponent,
      // canActivate: [DashboardGuard],
      // canLoad: [DashboardGuard] 
    
      },

    
]
// {path: '', redirectTo: '/home', pathMatch: 'full'}
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
