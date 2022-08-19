export class CssTitre {
  id: number;
  name: string;
  ancre: string;

  constructor(
    id: number,
    name: "Votre titre du chapitre",
    ancre: "Votre lien interne"
  ){
    this.id = id;
    this.name = name;
    this.ancre = ancre;
  }
}
