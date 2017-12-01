import { Component , OnInit} from "@angular/core"; // interface OnInit
import { IpService } from "./ip.service";


@Component({
    selector: 'app-ip',
    template: '<h3>My ip: {{ ip }} </h3>',
    providers: [IpService]
})

export class IpComponent implements OnInit {

    ip:string;
    //ghi de (overwrite)
    
    constructor(private ipService:IpService) {}
    ngOnInit(): void {
        this.ipService.getIp()
            .then(ip=> this.ip = ip)
            .catch(err=> console.log(err))
    }

}