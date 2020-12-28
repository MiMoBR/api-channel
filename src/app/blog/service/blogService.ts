import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllContent } from "../model/allContent";

import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api';

@Injectable({
    providedIn: 'root'
})

export class BlogServices{/*    https://www.techiediaries.com/angular-10-crud-example-web-api/  */
    constructor(
        private http: HttpClient
    ){}

    /*  C - Create  */
    create(data): Observable<any>{
        console.log("data");
        console.log(data);
        return this.http.post(`${baseURL}/postContent`, data);
    }
    /*  R - Read    */
    fullContent(){
        return this.http.get<AllContent[]>(`${baseURL}/getList`);
    }
    /*  U - Update a content from blog*/
    update(data): Observable<any> {
        alert("  data --- "+data);
        return this.http.post(`${baseURL}/updateAPost`, data);
    }
    /*  D - Delete a content from blog */
    deleteContent(id): Observable<any> {
        alert(id);
        return this.http.delete(`${baseURL}/deleteByIdContent/${id}`);
    }
}