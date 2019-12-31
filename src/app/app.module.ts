import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    RedComponent,
    YellowComponent,
    TwowayBindingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
