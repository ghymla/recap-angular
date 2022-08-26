import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { JSContent } from "./JSContent";
import { jsMethode } from "./JSMethode";

@Injectable({
  providedIn: 'root'
})
export class JavaScriptService {

  constructor(
    private http: HttpClient
  ) { }

  getJSContent(): Observable < JSContent [] > {
    return this.http.get<JSContent []>('api/jsContents').pipe(
      catchError(error => this.HandleError(error, []))
    )
  }

  getJSMethods(): Observable < jsMethode [] > {
    return this.http.get< jsMethode []>('api/jsmethods').pipe(
      catchError(error => this.HandleError(error, []))
    )
  }

  private HandleError(error: Error, valueDefault: any) {
    console.error(error);
    return of(valueDefault);
  }
}
