import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';


import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';
import { PrivateSharedModuleModule } from '../private-shared-module/private-shared-module.module';

import { PrivateHomeComponent } from '../private-layout/private-home/private-home.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    PrivateHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PrivateSharedModuleModule
 
  ]
})


export class DashboardModuleModule { }
