import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public yr: number = 2018;
  constructor() {
    var dt = new Date();
    var year = dt.getFullYear();
    if (year > 2018) {
      this.yr = year;
    }
  }

  ngOnInit() {
  }

}
