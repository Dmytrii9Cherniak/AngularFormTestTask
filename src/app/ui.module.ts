import { NgModule } from '@angular/core';
import {MefDevCardModule, MefDevPageLayoutsModule} from '@natec/mef-dev-ui-kit';

const components = [
  MefDevCardModule
]

@NgModule({
  exports: [components],
  imports: [components]
})
export class UiModule { }
