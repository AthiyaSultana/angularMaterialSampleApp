import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DemoRoutingModule} from './demo-routing.module';
import {ButtonsComponent} from './buttons/buttons.component';
import {FlexboxComponent} from './flexbox/flexbox.component';
import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule {
}
