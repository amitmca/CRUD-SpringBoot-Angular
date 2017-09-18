import{Injectable} from "@angular/core";
import{Http, RequestOptions, Headers} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Pelunasan } from "../interface/pelunasan";
import { Md5 } from "ts-md5/dist/md5";

let url: string = 'http://localhost:9090/api/pelunasan';

@Injectable()
export class PelunasanService{
    constructor(private http : Http) {

    }

    findAllPelunasan(){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .get(url, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    deletePelunasan(id: string){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .delete(url + '/' + id, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    insertPelunasan(pelunasan){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .post(url, pelunasan, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    updatePelunasan(pelunasan){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .put(url, pelunasan, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }

}