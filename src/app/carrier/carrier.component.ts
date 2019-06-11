import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  alertFunc(){
    alert('yo')
  }
  ninja = {
    name:'bingo'
  }
  constructor() { }

  ngOnInit() {
  }

}
