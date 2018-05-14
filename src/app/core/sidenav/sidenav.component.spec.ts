import { Component, OnInit } from '@angular/core';
// import { MatListDe } from '@angular/material';
import { Router } from '@angular/router';
// import { OdpService } from '../../services/odp.service';
import { MatRadioGroup } from '@angular/material';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  favoriteSeason: string;
  navbarItems = [
    { name: 'Home', icon: 'home', routerLink: 'home' },
    { name: 'Dictionary', icon: 'library_books', routerLink: 'dictionary' },
    { name: 'Useful Categories', icon: 'view_list', routerLink: 'category' },
    { name: 'Default Language', icon: 'g_translate', routerLink: 'language' },
    { name: 'Play Quiz Game', icon: 'play_circle_filled', routerLink: 'quiz' },
    { name: 'History', icon: 'history', routerLink: 'history' },
    { name: 'Favourites', icon: 'favorite', routerLink: 'favourites' },
    { name: 'Rate this App', icon: 'star_rate', dlink: 'https://play.google.com/store/apps/details?id=com.odiadictionarypro' },
    { name: 'Feedback', icon: 'feedback', routerLink: 'feedback' },
    { name: 'About Us', icon: 'info', routerLink: 'about' },
    { name: 'Settings', icon: 'settings', routerLink: 'settings' }
  ];
  constructor(private router: Router) {

  }
  ngOnInit() {
  }
}
