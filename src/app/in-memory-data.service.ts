import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { LANGAGES } from "./nav-langages/langages";
import { HTMLTITRES } from "./html/htmlTitres";
import { BALISES } from "./html/balises";
import { CSSTITRES } from "./css/cssTitres";
import { CSSPROPS } from "./css/cssProps";
import { JAVASCRIPTTITRES } from "./java-script/javaScriptTitres";
import { JSCONTENTS } from "./java-script/JSContents";
import { JSMETHODES } from "./java-script/JSMethodes";

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
    const javaScriptTitres = JAVASCRIPTTITRES;
    const jsContents = JSCONTENTS
    const jsmethods = JSMETHODES
    return {
      langages,
      htmlTitres,
      balises,
      cssTitres,
      cssProps,
      javaScriptTitres,
      jsContents,
      jsmethods
    };
  }
}
