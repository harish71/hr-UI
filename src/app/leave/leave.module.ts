import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply/apply.component';
import { CancelComponent } from './cancel/cancel.component';
import { LeaveHomeComponent } from './leave-home/leave-home.component';



@NgModule({
  declarations: [ApplyComponent, CancelComponent, LeaveHomeComponent],
  imports: [
    CommonModule
  ]
})
export class LeaveModule { }
