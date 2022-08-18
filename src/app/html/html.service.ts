import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from 'rxjs';
import { Balise } from "./balise";

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(
    private http: HttpClient
  ) { }

  getBalises(): Observable<Balise []>{
    return this.http.get<Balise []>('api/balises').pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )

  }
}
