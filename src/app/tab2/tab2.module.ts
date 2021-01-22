import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {SubTab2Component} from './sub-tab2/sub-tab2.component';
import {SubTab1Component} from './sub-tab1/sub-tab1.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
  ],
  declarations: [
    Tab2Page,
    SubTab1Component,
    SubTab2Component,
  ]
})
export class Tab2PageModule {}
