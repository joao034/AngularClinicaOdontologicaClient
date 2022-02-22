import { Injectable } from "@angular/core";
import {LoginI} from '../models/login.interface'
import { ResponseI} from "../models/response.interface";
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoginService{

    url : string = "" 

    constructor(private http: HttpClient ){}

    login(form: LoginI) :Observable<any>{
        let direction = this.url + "users"
        return this.http.post(direction, form)
    }
}