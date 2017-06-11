import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicForm } from './dynamic-form';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    DynamicForm,
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    IonicPageModule.forChild(DynamicForm),
  ],
  exports: [
    DynamicForm
  ]
})
export class DynamicFormModule {}
