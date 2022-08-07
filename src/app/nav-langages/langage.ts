export class Langage {
  id: number;
  name: string;
  logo: string;

  constructor(
    name: string = "entrer un nom ...",
    logo: string = "Url de votre logo",
  ){
    this.name = name;
    this.logo = logo;
  }
}
