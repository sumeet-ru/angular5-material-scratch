import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  declarations: [BlogsComponent]
})
export class BlogsModule { }
