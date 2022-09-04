import { jsMethode } from "./JSMethode";

export const JSMETHODES: jsMethode [] = [
  {
    id: 1,
    categorie: "Variable",
    name: "case",
    code: "maVar.toLowerCase()",
    explain: "Mettre le contenu de la Variable en  minuscule"
  },
  {
    id: 2,
    categorie: "Variable",
    name: "case",
    code: "maVar.toUpperCase()",
    explain: "Mettre le contenu de la Variable en  Majuscule"
  },
  {
    id: 3,
    categorie: "Variable",
    name: "replace",
    code: "maVar.replace(\n  'lettre(s)A','lettre(s)B'\n)",
    explain: "Remplacer la première lettre A par la lettre B"
  },
  {
    id: 4,
    categorie: "Variable",
    name: "length",
    code: "maVar.length",
    explain: "Connaitre la longueur de sa variable"
  },
  {
    id: 5,
    categorie: "Variable",
    name: "number",
    code: "Number(maVAr)",
    explain: "Forcer une ma Variable a devenir un type Number"
  },
  {
    id: 6,
    categorie: "Variable",
    name: "toString",
    code: "maVar.toString()",
    explain: "Forcer ma Variable a devenir un type String"
  },
  {
    id: 22,
    categorie: "Variable",
    name: "from",
    code: "Array.from(maVar)",
    explain: "Change votre Variable en un Array"
  },
  {
    id: 7,
    categorie: "Array",
    name: "split-join",
    code: "maString.split(argument(s))",
    explain: "Séparer une String en un array au niveau de l'argument"
  },
  {
    id: 8,
    categorie: "Array",
    name: "split-join",
    code: "monArray.join(argument(s))",
    explain: "Regrouper un Array en une string au niveau de l'argument"
  },
  {
    id: 9,
    categorie: "Array",
    name: "toString",
    code: "monArray.toString()",
    explain: "Convertir un Array en String"
  },
  {
    id: 10,
    categorie: "Array",
    name: "push-pop",
    code: "monArray.push(argument(s))",
    explain: "Rajouter mon argument a mon Array"
  },
  {
    id: 11,
    categorie: "Array",
    name: "push-pop",
    code: "monArray.pop(argument(s))",
    explain: "Supprimer le dernier argument de mon Array"
  },
  {
    id: 12,
    categorie: "Array",
    name: "map",
    code: "monArray.map(instruction(s))",
    explain: "Créé un nouvelle Array modifié"
  },
  {
    id: 13,
    categorie: "Array",
    name: "filter",
    code: "monArray.filter(instruction(s))",
    explain: "Créé un nouvelle Array en Filtrant le premier"
  },
  {
    id: 14,
    categorie: "Array",
    name: "findIndex",
    code: "monArray.findIndex(instruction(s))",
    explain: "Créé un nouvelle Array avec les index voulus"
  },
  {
    id: 15,
    categorie: "Array",
    name: "reduce",
    code: "monArray.reduce(\n  (accumulateur, current value)\n  => instruction(s)\n)",
    explain: "Créé une nouvelle Variable d'une valeur unique (équivaut a une boucle For)"
  },
  {
    id: 16,
    categorie: "Array",
    name: "some",
    code: "monArray.some(instruction)",
    explain: "Renvoi un Booléan, test la condition dans son Array, ne modifie pas l'array d'origine"
  },
  {
    id: 16,
    categorie: "Array",
    name: "forEach",
    code: "monArray.forEach(instruction)",
    explain: "Vient itéré sur chaque éléments de l'Array et éxecute l'instruction"
  },
  {
    id: 17,
    categorie: "Array",
    name: "sort",
    code: "monArray.sort()",
    explain: "Trie l'Array dans l'ordre croissant ou alphabétique"
  },
  {
    id: 18,
    categorie: "Array",
    name: "reverse",
    code: "monArray.reverse()",
    explain: "Retourne L'array, il le lit dans l'autre sens"
  },
  {
    id: 19,
    categorie: "Array",
    name: "includes",
    code: "monArray.includes(argument(s))",
    explain: "Vérifie si l'élément(s) est inclue dans l'Array"
  },
  {
    id: 20,
    categorie: "Array",
    name: "every",
    code: "monArray.every(condition)",
    explain: "Vérifie si tous les éléments de l'Array ont réussi la condition"
  },
  {
    id: 21,
    categorie: "Array",
    name: "of",
    code: "Array.of(élément(s))",
    explain: "Création d'un Array avec tous les éléménts passer en paramètre"
  }
]
