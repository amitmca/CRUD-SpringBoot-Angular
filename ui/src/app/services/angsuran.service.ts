import{Injectable} from "@angular/core";
import{Http, RequestOptions, Headers} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Md5 } from "ts-md5/dist/md5";

let url: string = 'http://localhost:9090/api/angsuran';

@Injectable()
export class AngsuranService{
    constructor(private http : Http) {

    }

    findAllAngsuran(){
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

    deleteAngsuran(id: string){
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

    insertAngsuran(angsuran){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .post(url, angsuran, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    updateAngsuran(angsuran){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .put(url, angsuran, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }

}