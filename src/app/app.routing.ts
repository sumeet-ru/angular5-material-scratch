import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routers: Routes = [{
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule'
}, {
    path: 'about',
    loadChildren: 'app/modules/about/about.module#AboutModule'
}, {
    path: 'contact_us',
    loadChildren: 'app/modules/contact-us/contact-us.module#ContactUsModule'
}, {
    path: 'services',
    loadChildren: 'app/modules/services/services.module#ServicesModule'
}, {
    path: 'blogs',
    loadChildren: 'app/modules/blogs/blogs.module#BlogsModule'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
