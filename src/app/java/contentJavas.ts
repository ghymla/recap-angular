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
    titre: "Arrays",
    chapitre: "Déclaration",
    content: `
              type[] monArray = new type[nb d'éléments];
              Integer[] monArray = new Integer[5];
              Integer[] monArray = new Integer[]{1,2,3,4,5};
              `
  },
  {
    id: 10,
    titre: "Arrays",
    chapitre: "changement/lecture de valeur",
    content: `
              monArray[index] = newValeur;
              System.out.println(monArray[index]); // -> valeur
              `
  },
  {
    id: 11,
    titre: "Arrays",
    chapitre: "Multidimentionnels",
    content: `
              Type[][] myArray = new type[nb d'éléments][nb d'éléments];
              String[][] myArray = new String[10][5];
              myArray[2][4] = "newValeur"; (ou lecture)
              `
  },
  {
    id: 12,
    titre: "Lists",
    chapitre: "Déclaration",
    content: `
              Type<paramètre de type> myList = new ArrayList<paramètre de type>();
              List<String> myList = new ArrayList<String>();
              `
  },
  {
    id: 13,
    titre: "Lists",
    chapitre: "Paramètre de type",
    content: `
              une List/Hash ne stoque QUE des Objets:
              -> String
              -> Integer
              -> Double
              -> Boolean
              -> Float
              `
  },
  {
    id: 14,
    titre: "Lists",
    chapitre: "Méthodes de base",
    content: `
              -> .add(élément)        // ajoute l'élément a sa list
              -> .set(index, élement) // remplace l'élément de l'index
              -> .remove(index)       // supprime
              -> .size()              // connaitre le nombre d'éléments
              `
  },
  {
    id: 15,
    titre: "Lists",
    chapitre: "list non ordonnée",
    content: `
              Set<String> mySet = new HashSet<String>();
              `
  },
  {
    id: 16,
    titre: "Hashs",
    chapitre: "Déclaration",
    content: `
              Map<type cléf, type valeur> maMap = new HashMap<type cléf, type valeur>();
              Map<String, Integer> maMap = new HashMap<String, Integer>();
              `
  },
  {
    id: 17,
    titre: "Hashs",
    chapitre: "itération",
    content: `
              for (Map.Entry<type cléf, type valeur> entry : maMap.entrySet()){
                // on itére sur entry qui est un élément clef + valeur.
              }

              utilisation de méthod:
              -> .getKey()    // voir la cléf
              -> .getValue()  // voir la valeur
              `
  },
  {
    id: 18,
    titre: "Hashs",
    chapitre: "Méthodes",
    content: `
              utilisation de méthod:
              -> monHash.get(maClef)        // voir la valeur ou modifier
              -> monHash.put(clef, valeur)  // ajouter un élément
              -> monHash.remove(clef)
              -> .size()
              `
  },
  {
    id: 19,
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
    id: 20,
    titre: "Fonctions",
    chapitre: "Modificateurs d'accès",
    content: `
              Public,
              Private,
              Protected
              `
  },
  {
    id: 21,
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
    id: 22,
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
  },
  {
    id: 23,
    titre: "Class",
    chapitre: "Constructeur",
    content: `
              class MaClass {
                attribut(s);

                MaClass(argument(s)){
                  this.attribut(s) = argument(s);
                  instruction(s);
                }
              }
              `
  },
  {
    id: 24,
    titre: "Class",
    chapitre: "Héritage",
    content: `
              class Mère {
                private attribut(s);

                Mère(argument(s)){
                  this.attribut(s) = argument(s);
                }
              }

              class Enfant extends Mère {
                attribut(s);

                Enfant(argument(s)){
                  super(attribut(s)Mère);
                  this.attribut(s) = argument(s);
                }
              }
              `
  },
  {
    id: 24,
    titre: "Class",
    chapitre: "Polymorphisme",
    content: `
              class Mère {
                void maMéthod{
                  instruction(s);
                }
              }

              class Enfant extends Mère {

                @Override           // convention de lisibilité
                void maMéthod{
                // le même nom de méthod que celle de la classe mère
                  super.maMéthod(); // celle de la class  mère
                  instruction(s);
                }
              }
              `
  }
]
