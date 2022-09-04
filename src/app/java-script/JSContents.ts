import { JSContent } from "./JSContent";

export const JSCONTENTS: JSContent [] = [
  {
    id: 1,
    titre: "Variable",
    chapitre: "Déclaration de variable",
    content: "const maVar = valeur;\n let maVar = value;"
  },
  {
    id: 2,
    titre: "Variable",
    chapitre: "Différents type",
    content: "Char\n Int / float\n Boolean\n Array\n Objet"
  },
  {
    id: 3,
    titre: "Structure conditionnelles",
    chapitre: "Condition If",
    content: "if (condition) {\n   instructions\n } else if (condition) {\n   instructions\n } else {\n   instructions\n }"
  },
  {
    id: 4,
    titre: "Structure conditionnelles",
    chapitre: "Opérateur ternaire",
    content: "(condition) ? instructions vrais : instructions faux"
  },
  {
    id: 5,
    titre: "Structure conditionnelles",
    chapitre: "Switch",
    content: "switch (expression) {\n  case choix1:\n    instructions\n    breack;\n  case choix2:\n    instructions\n    breack;\n  case choix3:\n    instructions\n    breack;\n  default:\n    instructions\n }"
  },
  {
    id: 6,
    titre: "Boucles",
    chapitre: "Boucle For",
    content: "for (initialisation; condition; incrémentation ou décrémentation) {\n  instructions\n }"
  },
  {
    id: 7,
    titre: "Boucles",
    chapitre: "Boucle While",
    content: "while (condition) {\n  instructions\n }"
  },
  {
    id: 8,
    titre: "Boucles",
    chapitre: "Boucle Do While",
    content: "do {\n  instructions\n } while (condition)"
  },
  {
    id: 9,
    titre: "Fonction",
    chapitre: "Structure d'une Fonction",
    content: "function MaFonction(agument1, argument2) {\n  instructions\n }"
  }
]
