import{Injectable} from "@angular/core";
import{Http, RequestOptions, Headers} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Nasabah } from "../interface/nasabah";
import { Md5 } from "ts-md5/dist/md5";

let url: string = 'http://localhost:9090/api/nasabah';

@Injectable()
export class NasabahService{
    constructor(private http : Http) {

    }

    findAllNasabah(){
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

    deleteNasabah(id: string){
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

    insertNasabah(nasabah){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .post(url, nasabah, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    updateNasabah(nasabah){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .put(url, nasabah, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }

}