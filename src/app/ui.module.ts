import { NgModule } from '@angular/core';
import { MefDevPageLayoutsModule } from '@natec/mef-dev-ui-kit';

const components = [
  MefDevPageLayoutsModule
]

@NgModule({
  exports: [components],
  imports: [components]
})
export class UiModule { }
