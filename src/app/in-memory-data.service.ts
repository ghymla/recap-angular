import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { LANGAGES } from "./nav-langages/langages";
import { HTMLTITRES } from "./html/htmlTitres";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const langages = LANGAGES;
    const htmlTitres = HTMLTITRES;
    return { langages, htmlTitres };
  }
}
