import { Component} from "@angular/core"

@Component ({
    selector: "app-bai1",
    template: `
        <h1>{{ so }}</h1>
        <input (click)="Cong()" type="button" value="+">
        <input (click)="Tru()" type="button" value="-">
        <img src="{{ hinh }}" (mouseover) = "changeImg($event)" />
    `
})

export class Bai1Component{
    so:number = 0;
    hinh:string = 'https://i-thethao.vnecdn.net/2017/11/29/3-8482-1511947331.jpg';
    hinh2:string = 'https://i-vnexpress.vnecdn.net/2017/11/29/2420108819818751151558661630359658o-1511947739_500x300.png';

    Cong() {
        this.so = this.so+1;
    }
    Tru() {
        this.so = this.so-1;
    }
    changeImg($e) {
        this.hinh = this.hinh2;
    }
}