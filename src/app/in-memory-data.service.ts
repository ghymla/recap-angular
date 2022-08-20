import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { LANGAGES } from "./nav-langages/langages";
import { HTMLTITRES } from "./html/htmlTitres";
import { BALISES } from "./html/balises";
import { CSSTITRES } from "./css/cssTitres";
import { CSSPROPS } from "./css/cssProps";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const langages = LANGAGES;
    const htmlTitres = HTMLTITRES;
    const balises = BALISES;
    const cssTitres = CSSTITRES;
    const cssProps = CSSPROPS;
    return { langages, htmlTitres, balises, cssTitres, cssProps };
  }
}
