import{Injectable} from "@angular/core";
import{Http, RequestOptions, Headers} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Admin } from "../interface/admin";
import { Md5 } from "ts-md5/dist/md5";

let url: string = 'http://localhost:9090/api/admin';

@Injectable()
export class AdminService{
    constructor(private http : Http) {

    }

    findAllAdmin(){
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

    deleteAdmin(id: string){
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

    saveNewAdmin(admin){
        admin.password = Md5.hashStr(admin.password).toString();
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .post(url, admin, options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    updateAdmin(admin){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token')
        });
        let options = new RequestOptions({headers: headers});
        return this
        .http
        .put(url, admin, options)
        .map(res => res.json())
        .catch(this.handleError);
    }
    login(login: Admin) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = new RequestOptions({ headers: headers });
        return this
            .http
            .post(url + '/login', login, options)
            .map(res => res.json())
            .catch(this.handleError);
    }


    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        
    }

}