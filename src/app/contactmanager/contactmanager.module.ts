import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainComponentComponent, SideNavComponent]
})
export class ContactmanagerModule { }
