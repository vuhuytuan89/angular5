import { Component } from "@angular/core";

@Component ({
    selector: "app-nhanvien",
    template: `
    <div class="nhanvien">
        <h3>Ho ten: {{ hoten }}</h3>
        <h3>Nam sinh: {{ namsinh }}</h3>
         <h3>Age: {{ 2017 - namsinh }}</h3>
         <h3>Game: {{ sothich.game }} - Hoc: {{ sothich.hoc }}</h3>
        <h4>Phan tu thu 1: {{ mang[1] }} - count: {{ mang.length }} </h4>
        <img src="{{ img }}">
    </div>
    `
})

export class NhanvienComponent {
    hoten:string = 'Vu Huy Tuan';
    namsinh:number = 1989;
    sothich = {
        game: 'LOL',
        hoc: 'Toan',
    };
    mang:string[] = [
        "ONE", "Two", "Three"
    ];
    img:string = 'http://genknews.genkcdn.vn/thumb_w/660/2017/image-1511940549905.png';

}