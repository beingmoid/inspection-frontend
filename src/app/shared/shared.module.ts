import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { AntdModule } from 'src/app/antd.module'
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const MODULES = [CommonModule, RouterModule, AntdModule,  MaterialModule, ReactiveFormsModule, NgbModule]




@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports:[
    ...MODULES
  ]
})
export class SharedModule { }
