import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {SubTab1Component} from './sub-tab1/sub-tab1.component';
import {SubTab2Component} from './sub-tab2/sub-tab2.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'sub-tab1',
        component: SubTab1Component
      },
      {
        path: 'sub-tab2',
        component: SubTab2Component
      },
      {
        path: '',
        redirectTo: 'sub-tab1'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
