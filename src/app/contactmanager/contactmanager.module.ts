import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MainComponentComponent} from './components/main-component/main-component.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';

import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';



const routes: Routes = [
  {path: '', component: ContactmanagerAppComponent,
   children : [{
    path: '' , component: MainComponentComponent
   }]
  },
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainComponentComponent, SideNavComponent]
})
export class ContactmanagerModule {
}
