import { jsMethode } from "./JSMethode";

export const JSMETHODES: jsMethode [] = [
  {
    id: 1,
    categorie: "Variable",
    code: "maVar.toLowerCase()",
    explain: "Mettre la Variable en  minuscule"
  },
  {
    id: 2,
    categorie: "Variable",
    code: "maVar.toUpperCase()",
    explain: "Mettre la Variable en  Majuscule"
  },
  {
    id: 3,
    categorie: "Variable",
    code: "maVar.replace('lettre(s)A','lettre(s)B')",
    explain: "Remplacer la/les lettre(s) A par la/les lettre(s) B"
  },
  {
    id: 4,
    categorie: "Array",
    code: "maString.split(argument(s))",
    explain: "Séparer une String en un array au niveau de l'argument"
  },
  {
    id: 5,
    categorie: "Array",
    code: "monArray.join(argument(s))",
    explain: "Regrouper un Array en une string au niveau de l'argument"
  },
  {
    id: 6,
    categorie: "Array",
    code: "monArray.toString()",
    explain: "Convertir un Array en String"
  },
  {
    id: 7,
    categorie: "Array",
    code: "monArray.push(argument(s))",
    explain: "Rajouter mon argument a mon Array"
  },
  {
    id: 6,
    categorie: "Array",
    code: "monArray.pop(argument(s))",
    explain: "Supprimer l'argument de mon Array"
  },
]
