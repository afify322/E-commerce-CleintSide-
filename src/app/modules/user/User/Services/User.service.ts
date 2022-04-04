import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseURL: string = 'https://hedoom.herokuapp.com';
    constructor(private httpClient: HttpClient) {


    }
    getUserData(UserId: string) {
        return this.httpClient.get<any>(this.baseURL + '/user/' + UserId)
    }

}