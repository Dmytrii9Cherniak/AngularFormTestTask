import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';

const routes: Routes = PlatformHelper.updatePluginsRoutes([
  {
    path: '',
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', loadChildren: () => import('./components/form/form.module').then(m => m.FormModule) }
    ]
  }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
