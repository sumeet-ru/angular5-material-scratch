import { Component } from '@angular/core';
import { AppServiceService } from '../../shared/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public appService: AppServiceService) { }

}
