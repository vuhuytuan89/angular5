import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  isShow = false;
  arrSubject = ['angular', 'nodejs', 'jquery']

  arrWords = [
    { id: 1, en: 'action', vn: 'hành ??ng', memorized: true },
    { id: 2, en: 'actor', vn: 'di?n viên', memorized: false },
    { id: 3, en: 'activity', vn: 'ho?t ??ng', memorized: true },
    { id: 4, en: 'active', vn: 'ch? ??ng', memorized: true },
    { id: 5, en: 'bath', vn: 't?m', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ng?', memorized: true }
  ];
  newEn = "";
  newVn = "";


  filterStatus = 'viewAll';

  constructor() { }

  ngOnInit() {
  }

  addWord() {

    this.arrWords.push({
      id: this.arrWords.length +1,
      en:this.newEn,
      vn:this.newVn,
      memorized:false
    });
    this.newEn = "";
    this.newVn = "";
    this.isShow = false;
  }

  showForm() {
    this.isShow = true;
  }
  remove(id:number) {console.log(id);
    const index = this.arrWords.findIndex(element => element.id === id)
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean) {
    const dkViewAll = this.filterStatus == 'viewAll';
    const dkMemoryIsTrue = this.filterStatus == 'memoryIsTrue' && memorized;
    const dkMemoryIsFalse = this.filterStatus == 'memoryIsFalse' && !memorized;
    return dkViewAll || dkMemoryIsTrue || dkMemoryIsFalse;
  }

}
