import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [],
  exports: [MatIconModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule]
})
export class MaterialModule {
}
