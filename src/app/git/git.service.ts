import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { CommandeGit } from "./commandeGit";


@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(
    private http: HttpClient
  ) { }

  getCommandes(): Observable<CommandeGit[]>{
    return this.http.get<CommandeGit[]>(`api/commandesGit`).pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    )
  }

}
