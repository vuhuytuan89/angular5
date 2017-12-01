import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pices',
  templateUrl: './pices.component.html',
  styleUrls: ['./pices.component.css']
})
export class PicesComponent implements OnInit {
  birthday = new Date(2017,1,12);
  person = { name: 'Tuan', age: '30'};
  //address:string = 'keangnam , HN';
  address = Promise.resolve('keangnam , HN'); // bien tu server
  constructor() { }

  ngOnInit() {
  }

}
