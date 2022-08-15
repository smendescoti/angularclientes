import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeMaterialModule } from './home-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeMaterialModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
