import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from '../../app/shared/shared.module';
import { WidgetsComponentsModule } from 'src/app/components/kit/widgets/widgets-components.module';


@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    WidgetsComponentsModule,
  ],
  exports:[SidebarComponent, TopbarComponent]
})
export class LayoutModule { }
