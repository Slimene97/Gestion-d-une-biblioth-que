import { Component } from '@angular/core'; // Importe le décorateur Component depuis le module core d'Angular
import { Livre } from '../models/livre.model'; // Importe le modèle Livre
import { LivreService } from '../services/livre.service'; // Importe le service LivreService
import { ActivatedRoute, Router } from '@angular/router'; // Importe les classes ActivatedRoute et Router du module de routage d'Angular

@Component({
  selector: 'app-ajout-livre', // Sélecteur du composant utilisé dans les templates HTML
  templateUrl: './ajout-livre.component.html', // Fichier de template HTML pour le composant
  styleUrls: ['./ajout-livre.component.css'] // Feuilles de styles CSS pour le composant
})
export class AjoutLivreComponent { // Définit la classe du composant
  nouveauLivre: Livre = { // Déclare une propriété de type Livre avec des valeurs initiales
    id: 0,
    intitule: '',
    auteur: '',
    editeur: '',
    anneePublication: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private livreService: LivreService) {} // Constructeur du composant avec injection de dépendances

  ajouterLivre(): void { // Méthode pour ajouter un nouveau livre
    this.livreService.ajouterLivre(this.nouveauLivre); // Appelle la méthode ajouterLivre() du service LivreService
    this.nouveauLivre = { id: 0, intitule: '', auteur: '', editeur: '', anneePublication: 0 }; // Réinitialise l'objet nouveauLivre avec des valeurs par défaut
    this.router.navigate(['/livres']); // Navigue vers la route '/livres' en utilisant le Router
  }
}
