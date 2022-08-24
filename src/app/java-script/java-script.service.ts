import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { JSContent } from "./JSContent";

@Injectable({
  providedIn: 'root'
})
export class JavaScriptService {

  constructor(
    private http: HttpClient
  ) { }

  getJSContent(): Observable < JSContent [] > {
    return this.http.get<JSContent []>('api/jsContents').pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    )
  }
}
