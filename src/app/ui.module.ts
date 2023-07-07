import { NgModule } from '@angular/core';
import { MefDevCardModule } from '@natec/mef-dev-ui-kit';

const components = [
  MefDevCardModule
]

@NgModule({
  exports: [components],
  imports: [components]
})
export class UiModule { }
