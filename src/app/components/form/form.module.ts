import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MefDevCardModule }  from "@natec/mef-dev-ui-kit";
import { ReactiveFormsModule } from '@angular/forms';
import {UiModule} from "../../ui.module";


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    UiModule,
  ]
})
export class FormModule { }
