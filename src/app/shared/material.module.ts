import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule
  ],
  declarations: [],
  exports: [MatIconModule, MatCheckboxModule]
})
export class MaterialModule {
}
