import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazPage } from './laz';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LazPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LazPage),
  ],
})
export class LazPageModule {}
