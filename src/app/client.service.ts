import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from './container/login/UserModel';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    constructor(private http: HttpClient) {
    }

    downloadFile(): Observable<Blob> {
        const url = 'http://localhost:9000/api/blog/download';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXZlZWsuc3JpMUBnbWFpbC5jb20iLCJpZCI6IjEiLCJleHAiOjE3MTAxNjI3NzJ9.lR0oLAXdU1l03UA6GvE57Lj5lrV0wtaU4KmMBnZxhd7PPcrF2cDsqaJpUZGGWjDNI2dVY0eFuJR17zSLqsZJRw' // If required
        });

        return this.http.get(url, {headers, responseType: 'blob'});
    }

    login(user: UserModel): Observable<any> {
        let headers = new HttpHeaders();

        const url = 'http://localhost:9000/api/auth/login';

        return this.http.post(url, user, {headers, observe: 'response'});
    }
}
