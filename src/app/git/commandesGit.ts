import { CommandeGit } from "./commandeGit";

export const COMMANDESGIT: CommandeGit[] = [
  {
    id: 1,
    name: "help",
    cmd: "git help",
    explain: "Aide en ligne de commande"
  },
  {
    id: 2,
    name: "config",
    cmd: "git config",
    explain: "Configuration de git"
  },
  {
    id: 3,
    name: "initialiser",
    cmd: "git init",
    explain: "Créé un dépot git"
  },
  {
    id: 4,
    name: "status",
    cmd: "git status (gst)",
    explain: "Status du dépot"
  },
  {
    id: 5,
    name: "branches",
    cmd: "git branche -a (gb -a)",
    explain: "Lister les branches"
  },
  {
    id: 6,
    name: "branches",
    cmd: "git branch nom_de_ma_branch (gb ma_branch)",
    explain: "Création d'une branche"
  },
  {
    id: 7,
    name: "branches",
    cmd: "git checkout nom_de_ma_branch (gco ma_branch)",
    explain: "Basculer sur ma branche"
  },
  {
    id: 8,
    name: "branches",
    cmd: "git checkout -b nom_de_ma_branch_nouvelle (gco -b)",
    explain: "Création et basculer directement sur la nouvelle branche"
  },
  {
    id: 9,
    name: "branches",
    cmd: "git branch -d nom_de_ma_branch_local",
    explain: " Supprimer votre branche en local"
  },
  {
    id: 10,
    name: "branches",
    cmd: "git push origin --delete nom_de_ma_branch_distante",
    explain: "Supprmier votre branche sur le repo distant"
  },
  {
    id: 11,
    name: "branches",
    cmd: "git checkout nom_de_ma_branch",
    explain: "Changer de branche"
  },
  {
    id: 12,
    name: "branches",
    cmd: "git switch nom_de_ma_branch",
    explain: "Changer de branche (version 2.23)"
  },
  {
    id: 13,
    name: "commit",
    cmd: "git add . (ga .)",
    explain: "Ajouter les fichiers modifier pour le prochain commit"
  },
  {
    id: 14,
    name: "commit",
    cmd: "git commit -m 'initial commit' (gcmsg 'blabla')",
    explain: "Commit les fichiers"
  },
  {
    id: 15,
    name: "commit",
    cmd: "git reset",
    explain: "Annuler le dernier commit (le status doit etre clean)"
  },
  {
    id: 16,
    name: "commit",
    cmd: "GIT_AUTHOR_DATE='2015-12-12 08:32 +100' git commit -m 'Commit antidaté'",
    explain: "Dater un commit"
  },
  {
    id: 17,
    name: "commit",
    cmd: "git pull",
    explain: "Mettre à jour le dépôt local"
  },
  {
    id: 18,
    name: "push",
    cmd: "git push (gp)",
    explain: "Envoyer ses commit vers le dépôt distant"
  },
  {
    id: 19,
    name: "push",
    cmd: "git push origin ma_branche",
    explain: "Envoyer ses commit vers le dépôt distant sur sa branche"
  },
  {
    id: 20,
    name: "supprimer",
    cmd: "git rmg --cached nom_du_fichier",
    explain: "Supprimer un ficher de l'index"
  },

]
