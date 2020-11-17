import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'


const MODULES = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports:[...MODULES],
})
export class MaterialModule { }
