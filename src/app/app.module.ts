import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ListEmployessComponent } from './employees/list-employess.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CmpIteractionComponent } from './cmp-iteraction/cmp-iteraction.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { EmployeeService } from './employee.service';




@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    RedComponent,
    YellowComponent,
    TwowayBindingComponent,
    ListEmployessComponent,
    BindingComponent,
    EventbindingComponent,
    StructuralDirectivesComponent,
    CmpIteractionComponent,
    PipesExampleComponent,
    ServiceExampleComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
