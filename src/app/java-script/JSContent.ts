export class JSContent {
  id: number;
  titre: string;
  chapitre: string;
  content: string;

  constructor (
    id: 0,
    titre: "javaScriptTitreKey",
    chapitre: string,
    content: string
  ) {
    this.id = id;
    this.titre = titre;
    this.chapitre = chapitre;
    this.content = content;
  }
}
