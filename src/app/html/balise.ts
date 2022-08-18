export class Balise {
  id: number;
  balise: string;
  explain: string;

  constructor(
    id: number,
    balise: "Votre balise",
    explain:  "Que signifie la balise ?"
  ){
    this.id = id;
    this.balise = balise;
    this.explain = explain;
  }
}
