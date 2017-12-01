import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import 'rxjs/add/operator/toPromise';
@Injectable()

export class IpService {
    // khoi tao doi tuong (private http:Http
    constructor(private http:Http ) {}
    getIp() {

        return this.http.get('https://httpbin.org/get')
                    .toPromise()
                    .then(res=>res.json())
                    .then(resJson => resJson.origin);
    }
}