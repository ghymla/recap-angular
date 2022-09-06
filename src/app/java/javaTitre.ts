export class javaTitre {
  id: number;
  titre: string;
  ancre: string;

  constructor(
    id = 0,
    titre = "Titre de section",
    ancre = "lien interne"
  ){
    this.id = id;
    this.titre = titre;
    this.ancre = ancre;
  }
}
