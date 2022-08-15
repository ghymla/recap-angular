export class HtmlTitre {
  id: number;
  name: string;
  ancre: string;

  constructor(
    // valeur par defaut avec leur type
    // name: type = "valeur par defaut",
    id: number,
    name: string = "titre inconnue",
    ancre: string= "pas d'ancre liée",
    ) {
      // assignation
      // this.name = name;
      this.id = id;
      this.name = name;
      this.ancre = ancre;
    }
}
