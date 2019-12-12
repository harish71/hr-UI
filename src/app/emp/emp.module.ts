import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EmpHomeComponent, PersonalComponent, AddressComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EmpModule { }
