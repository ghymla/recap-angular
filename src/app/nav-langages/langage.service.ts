import { Injectable } from '@angular/core';
import { Langage } from "./langage";
import { HtmlTitre } from "../html/htmlTitre";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from 'rxjs';


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
        return of([]);
      })
    );
  }

  // tu change tu met getTitre et tu envoi .get('api/${value}Titres')
  getHtmlTitre(): Observable <any> {
    return this.http.get<HtmlTitre []>('api/htmlTitres').pipe(
      tap((titles)=> {
        console.table(titles);
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )
  }
}
