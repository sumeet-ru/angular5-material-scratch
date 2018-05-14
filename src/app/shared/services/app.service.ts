import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppServiceService {

  public navBarOpen: boolean = true;
  constructor(private http: HttpClient) { }

  public toggleNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }
}
