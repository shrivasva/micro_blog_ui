import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../container/login/UserModel';
import {environment} from "../../environments/environment";
import {constants} from "../constants/constants";
import {StorageService} from "../storage/StorageService";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    constructor(private http: HttpClient, private storageService:StorageService) {
    }

    login(user: UserModel): Observable<any> {
        const url = environment.apiUrl + constants.loginUrl;
        return this.http.post(url, user, {observe: 'response'});
    }

    getAllBlogs(userId: string): Observable<any> {
        const url = environment.apiUrl + constants.allBlogUrl;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.storageService.getToken()
        });
        return this.http.post(url, {"userId": userId}, {headers, observe: 'response'});
    }
}
