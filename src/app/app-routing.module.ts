import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpHomeComponent } from './emp/emp-home/emp-home.component';
import { EmpModule } from './emp/emp.module';
import { ProjectHomeComponent } from './project/project-home/project-home.component';
import { LeaveHomeComponent } from './leave/leave-home/leave-home.component';
import { ProjectModule } from './project/project.module';
import { LeaveModule } from './leave/leave.module';
import { PersonalComponent } from './emp/personal/personal.component';
import { AddressComponent } from './emp/address/address.component';


const routes: Routes = [
  {path:"emp" , component:EmpHomeComponent,children:[
       {path:'personal',component:PersonalComponent},
       {path:'address',component:AddressComponent}
  ] },
  {path:"project" ,component:ProjectHomeComponent},
  {path:"leave",component:LeaveHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    EmpModule,
    ProjectModule,
    LeaveModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
