import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-persion',
  templateUrl: './list-persion.component.html',
  styleUrls: ['./list-persion.component.css']
})
export class ListPersionComponent implements OnInit {
  arrPeople = [
    { name: 'ti', age: 15},
    { name: 'teo', age: 20},
    { name: 'tun', age: 30}
  ];
  constructor() { }

  ngOnInit() {
  }

}
