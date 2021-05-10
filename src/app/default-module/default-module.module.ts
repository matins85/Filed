import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';


import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { PublicSharedModuleModule } from '../public-shared-module/public-shared-module.module';


import { HomeComponent } from '../public-layout/home/home.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomeComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PublicSharedModuleModule
 
  ]
})

export class DefaultModuleModule { }
