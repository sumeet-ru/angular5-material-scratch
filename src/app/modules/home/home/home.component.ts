import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myname: Object = {value: 'sumeet'};
  constructor() { }

  ngOnInit() {
  }
  showInputValue(value: any) {
    console.log(value.value);
    this.myname = {value: 'roy'};
  }
}
