export class HtmlTitre {
  id: number;
  titre: string;
  ancre: string;

  constructor(
    // valeur par defaut avec leur type
    // titre: type = "valeur par defaut",
    id: number,
    titre: string = "titre inconnue",
    ancre: string= "pas d'ancre liée",
    ) {
      // assignation
      // this.titre = titre;
      this.id = id;
      this.titre = titre;
      this.ancre = ancre;
    }
}
