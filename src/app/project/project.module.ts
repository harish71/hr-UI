import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { NewComponent } from './new/new.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [ProjectHomeComponent, NewComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
