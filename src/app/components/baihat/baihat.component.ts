import { Component} from '@angular/core';

@Component({
  selector: 'app-baihat',
  templateUrl: './baihat.component.html',
  styleUrls: ['./baihat.component.css'],
})
export class BaihatComponent{
  tenBH:string = 'abc';
  color:string = 'green';
  // gán class, nên ??t ki?u boolean, if = true thì them css
  macao:boolean = true;
  hinh:string = 'https://i-kinhdoanh.vnecdn.net/2013/12/25/laodong-7487-1387940044.jpg';

  constructor() {
    this.tenBH = 'def';
    this.createBH();
  }

  clickImg(e) {
    console.log(e);
    alert(e.srcElement.src);
    e.srcElement.src = "https://i-thethao.vnecdn.net/2017/11/29/3-8482-1511947331.jpg";
  }

  createBH() {
    this.tenBH = "Hello word";
  }
}
