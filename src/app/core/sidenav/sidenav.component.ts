import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../shared/services/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  navbarItems = [
    { name: 'Home', icon: 'home', routerLink: '' },
    { name: 'About Us', icon: 'info_outline', routerLink: 'about' },
    { name: 'Contact Us', icon: 'perm_contact_calendar', routerLink: 'contact_us' },
    { name: 'Blogs', icon: 'rss_feed', routerLink: 'blogs' },
    { name: 'Services', icon: 'compare_arrows', routerLink: 'services' },
  ];
  constructor(public appService: AppServiceService, public router: Router) { }

  ngOnInit() {
  }
  redirectToRoot(root: object) {
    this.router.navigateByUrl(root['routerLink']);
  }


}
