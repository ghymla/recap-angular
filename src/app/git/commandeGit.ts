export class CommandeGit {
  id: number;
  name: string;
  cmd: string;
  explain: string;

  constructor(
    id = 0,
    name = "nom générique",
    cmd = "commande console a exécuter",
    explain = "a quoi sert la commande"
  ){
    this.id = id;
    this.name = name;
    this.cmd = cmd;
    this.explain = explain;
  }

}
