import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { ContentJava } from "./contentJava";

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(
    private http: HttpClient
  ) { }

  getContent(): Observable <ContentJava []> {
    return this.http.get<ContentJava []>(`api/javaContents`).pipe(
      catchError( error => {
        console.log(error);
        return of([]);
      })
    )
  }
}
