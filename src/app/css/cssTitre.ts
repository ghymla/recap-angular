export class CssTitre {
  id: number;
  titre: string;
  ancre: string;

  constructor(
    id: number,
    titre: "Votre titre du chapitre",
    ancre: "Votre lien interne"
  ){
    this.id = id;
    this.titre = titre;
    this.ancre = ancre;
  }
}
