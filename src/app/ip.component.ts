import { Component } from "@angular/core";
import { Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-ip',
    template: '<h3>My ip: {{ ip }} </h3>'
})

export class IpComponent {
    ip:string;
    constructor(private http: Http) {
        this.http.get('https://httpbin.org/get')
            .toPromise()
            .then(res=>res.json())
            //.then(resJson => console.log(resJson.url))
            .then(resJson => this.ip = resJson.origin)
            .catch(err => console.log(err));
    }
}