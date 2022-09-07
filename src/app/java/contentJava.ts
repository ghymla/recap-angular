export class ContentJava {
  id: number;
  titre: string;
  chapitre: string;
  content: string;

  constructor(
    id: 0,
    titre: "keyToTitre",
    chapitre: "titre du contenue",
    content: "le contenue"
  ){
    this.id = id;
    this.titre = titre;
    this.chapitre = chapitre;
    this.content = content;
  }
}
