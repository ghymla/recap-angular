export class Langage {
  id: number;
  name: string;
  logo: string;
  route: string;

  constructor(
    id: number,
    name: string = "entrer un nom ...",
    logo: string = "Url de votre logo",
    route: string
  ){
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.route = route;
  }
}
