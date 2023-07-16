import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[] = []; // Tableau pour stocker les livres

  constructor() {
    // Exemple de livres pré-remplis
    //this.livres.push(
    //  { id: 1, intitule: 'Livre 1', auteur: 'Slime, 1', editeur: 'Éditeur 1', anneePublication: 2020 }, // Ajoute un livre au tableau des livres
     // { id: 2, intitule: 'Livre 2', auteur: 'daaas 2', editeur: 'Éditeur 2', anneePublication: 2021 }, // Ajoute un autre livre au tableau des livres
     // { id: 3, intitule: 'Livre 3', auteur: 'slimene 3', editeur: 'Éditeur 3', anneePublication: 2022 } // Ajoute un autre livre au tableau des livres
  // );
  }

  getLivres(searchTerm: string): Livre[] {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase(); // Convertit le terme de recherche en minuscules
      return this.livres.filter(livre =>
        livre.intitule.toLowerCase().includes(searchTermLower) // Filtre les livres dont l'intitulé ou l'auteur correspond au terme de recherche
      );
    }
    return this.livres; // Renvoie tous les livres si aucun terme de recherche n'est spécifié
  }
  

  getLivreById(id: number): Livre | undefined | null {
    const livre = this.livres.find(livre => livre.id === id); // Recherche un livre par son ID
    return livre || null; // Renvoie le livre s'il est trouvé, sinon renvoie null
  }
  

  ajouterLivre(livre: Livre): void {
    this.livres.push(livre); // Ajoute un livre au tableau des livres
  }

  mettreAJourLivre(livre: Livre): void {
    const index = this.livres.findIndex(l => l.id === livre.id); // Trouve l'index du livre à mettre à jour
    if (index !== -1) {
      this.livres[index] = livre; // Met à jour le livre dans le tableau des livres
    }
  }

  supprimerLivre(id: number): void {
    const index = this.livres.findIndex(livre => livre.id === id); // Trouve l'index du livre à supprimer
    if (index !== -1) {
      this.livres.splice(index, 1); // Supprime le livre du tableau des livres
    }
  }
}
