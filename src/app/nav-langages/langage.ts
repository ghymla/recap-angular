export class Langage {
  id: number;
  name: string;
  logo: string;

  constructor(
    id: number,
    name: string = "entrer un nom ...",
    logo: string = "Url de votre logo",
  ){
    this.id = id;
    this.name = name;
    this.logo = logo;
  }
}
