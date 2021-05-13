import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';


import { DefaultLayoutComponent } from '../default-layout/default-layout.component';
import { PublicSharedModuleModule } from '../public-shared-module/public-shared-module.module';


import { HomeComponent } from '../public-layout/home/home.component';
import { Home2Component } from '../public-layout/home2/home2.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomeComponent,
    Home2Component,


  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PublicSharedModuleModule
 
  ]
})

export class DefaultModuleModule { }
