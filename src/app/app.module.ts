import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MefDevCardModule, MefDevPageLayoutsModule} from '@natec/mef-dev-ui-kit';
import { ReactiveFormsModule } from '@angular/forms';
import {PlatformHelper} from "@natec/mef-dev-platform-connector";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MefDevCardModule,
    ReactiveFormsModule,
    MefDevPageLayoutsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
