import { Injectable } from '@angular/core';
import { Langage } from "./langage";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangageService {

  constructor(
    private http: HttpClient
  ) { }

  getLangages(): Observable <Langage []>{
    // return this.http.get<retour voulu>('urlApi').pipe(tap et/ou catcherror)
    return this.http.get<Langage []>('api/langages').pipe(
      catchError((error) => {
        console.error(error);
        return of([])
      })
    );
  }
}
