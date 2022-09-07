import { ContentJava } from "./contentJava";

export const JAVACONTENTS: ContentJava[] = [
  {
    id: 1,
    titre: "Déclaration de variables",
    chapitre: "Variables",
    content: `
              int maVar = 50;
              float maVar = 50.02;
              double maVar = 13.25648514;
              boolean maVar = true;
              String maVar = "je suis une string";
              `
  },
  {
    id: 2,
    titre: "Déclaration de variables",
    chapitre: "Constantes",
    content: `
              final int MACONST    = 18;
              final String MACONST = "ma constante";
              `
  },
  {
    id: 3,
    titre: "Conditions",
    chapitre: "If/else",
    content: `
              if (condition) {

                instruction(s);

              } else if (condition) {

                instruction(s);

              } else {

                instruction(s);

              }
              `
  },
  {
    id: 4,
    titre: "Conditions",
    chapitre: "Switch",
    content: `
              switch(maVar) {
                case condi1:
                  instruction(s);
                  break;
                case condi2:
                  instruction(s);
                  break;
                case condi3:
                  instruction(s);
                  break;
                default:
                  instruction(s);
              }
              `
  },
  {
    id: 5,
    titre: "Boucles",
    chapitre: "Boucle for",
    content: `
              for(initialisation ; condition ; incrémentation) {
                instruction(s)
              }
              `
  },
  {
    id: 6,
    titre: "Boucles",
    chapitre: "Boucle forEach",
    content: `
              int[] myArray = new int[] {1,2,3,4,5};

              for (int number : myArray){
                instruction(s);
              }
              `
  },
  {
    id: 7,
    titre: "Boucles",
    chapitre: "Boucle while",
    content: `
              while(condition){
                instruction(s);
              }
              `
  },
  {
    id: 8,
    titre: "Boucles",
    chapitre: "Boucle do..while",
    content: `
              do {
                instruction(s);
              } while(condition);
              `
  },
  {
    id: 9,
    titre: "Fonctions",
    chapitre: "Déclaration d'une fonction",
    content: `
              accès modificateur d'état type de retour nomFunction(argument(s)){
                instruction(s);
              }

              public static void maFunction(){
                System.out.println("le message de paix: coucou !!");
              }
              `
  },
  {
    id: 10,
    titre: "Fonctions",
    chapitre: "Modificateurs d'accès",
    content: `
              Public,
              Private,
              Protected
              `
  },
  {
    id: 11,
    titre: "Class",
    chapitre: "Déclaration d'une class",
    content: `
              accès  modificateur d'état  type de retour MaClass(argument(s)){
                instruction(s);
              }

              Public class MaClass(){}
              Public static void MaClass(){}
              `
  },
  {
    id: 12,
    titre: "Class",
    chapitre: "Modificateurs d'état",
    content: `
              static,
              synchronized,
              transient,
              native,
              strictfp,
              volatile
              `
  }
]
