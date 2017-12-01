import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  name:string = 'tuan';
  isHightLight = false;
  curentStyle = { color:'red', fontSize:'30px'};
  constructor() { }

  ngOnInit() {
  }

  showEvent(event) {
    //console.log(event.target.value);
    this.name = event.target.value;
  }
}
