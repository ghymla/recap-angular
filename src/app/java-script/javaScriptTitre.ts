export class JavaScriptTitre {
  id: number;
  titre: string;
  ancre: string;

  constructor(
    id: number,
    titre: string,
    ancre: string
  ){
    this.id = id;
    this.titre = titre;
    this.ancre = ancre;
  }
}
