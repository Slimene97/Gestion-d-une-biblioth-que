export class Livre {
  id: number;                // Déclare une propriété 'id' de type 'number' pour stocker l'identifiant du livre
  intitule: string;          // Déclare une propriété 'intitule' de type 'string' pour stocker le titre du livre
  auteur: string;            // Déclare une propriété 'auteur' de type 'string' pour stocker l'auteur du livre
  editeur: string;           // Déclare une propriété 'editeur' de type 'string' pour stocker l'éditeur du livre
  anneePublication: number;  // Déclare une propriété 'anneePublication' de type 'number' pour stocker l'année de publication du livre

  constructor(id: number, titre: string, auteur: string, editeur: string, anneePublication: number) {
    this.id = id;                        // Affecte la valeur du paramètre 'id' à la propriété 'id' de la classe
    this.intitule = titre;               // Affecte la valeur du paramètre 'titre' à la propriété 'intitule' de la classe
    this.auteur = auteur;                 // Affecte la valeur du paramètre 'auteur' à la propriété 'auteur' de la classe
    this.editeur = editeur;               // Affecte la valeur du paramètre 'editeur' à la propriété 'editeur' de la classe
    this.anneePublication = anneePublication;   // Affecte la valeur du paramètre 'anneePublication' à la propriété 'anneePublication' de la classe
  }
}
