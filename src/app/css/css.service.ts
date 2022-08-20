import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { cssProp } from "./cssProp";

@Injectable({
  providedIn: 'root'
})
export class CssService {

  constructor(
    private http: HttpClient
  ) { }

  getCssProps(): Observable< cssProp [] > {
    return this.http.get< cssProp[] >('api/cssProps').pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )
  }
}
