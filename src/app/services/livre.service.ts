import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[] = []; 

  constructor() {
   
  }

  getLivres(searchTerm: string): Livre[] {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase(); 
      return this.livres.filter(livre =>
        livre.intitule.toLowerCase().includes(searchTermLower) 
      );
    }
    return this.livres; // Renvoie tous les livres si aucun terme de recherche n'est spécifié
  }
  

  getLivreById(id: number): Livre | undefined | null {
    const livre = this.livres.find(livre => livre.id === id);
    return livre || null; // Renvoie le livre s'il est trouvé, sinon renvoie null
  }
  

  ajouterLivre(livre: Livre): void {
    this.livres.push(livre); // Ajoute un livre au tableau des livres
  }

  mettreAJourLivre(livre: Livre): void {
    const index = this.livres.findIndex(l => l.id === livre.id); 
    if (index !== -1) {
      this.livres[index] = livre; // Met à jour le livre dans le tableau des livres
    }
  }

  supprimerLivre(id: number): void {
    const index = this.livres.findIndex(livre => livre.id === id); // Trouve l'index du livre à supprimer
    if (index !== -1) {
      this.livres.splice(index, 1); 
    }
  }
}
