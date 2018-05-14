import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceComponent } from './service/service.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ServiceComponent]
})
export class ServicesModule { }
