export class cssProp {
  id: number;
  code: string;
  explain: string;

  constructor(
    id: number,
    code: "Entrer votre propriété css",
    explain: "A quoi sert cette propriété ?"
  ) {
    this.id = id;
    this.code = code;
    this.explain = explain;
  }
}
