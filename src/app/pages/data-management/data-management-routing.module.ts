import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/features/common-layout/common-layout.component';

import { DataManagementComponent } from './data-management.component';

const routes: Routes = [{
  path: '', data: { restrict: ['dataManagement'] }, component: CommonLayoutComponent,
  children: [
    {
      path: '', component: DataManagementComponent,
      children: [
       
      ]
    }
  ]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagementRoutingModule { }
