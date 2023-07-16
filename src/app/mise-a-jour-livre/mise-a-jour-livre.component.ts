import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../models/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-mise-a-jour-livre',
  templateUrl: './mise-a-jour-livre.component.html',
  styleUrls: ['./mise-a-jour-livre.component.css']
})
export class MiseAJourLivreComponent implements OnInit {
  livre: any; // Variable pour stocker le livre à mettre à jour

  constructor(
    private route: ActivatedRoute, // Permet d'accéder aux paramètres de l'URL
    private router: Router, // Permet de naviguer vers d'autres routes
    private livreService: LivreService // Service utilisé pour les opérations sur les livres
  ) {}

  ngOnInit(): void {
    const livreId = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID du livre à partir des paramètres de l'URL
    this.livre = this.livreService.getLivreById(livreId); // Récupère le livre à mettre à jour en utilisant le service LivreService et l'ID du livre
    if (!this.livre) {
      // Gérer le cas où le livre n'est pas trouvé
      this.router.navigate(['/livre-non-trouve']); // Redirection vers une page d'erreur ou de livre non trouvé
    }
  }

  mettreAJourLivre(): void {
    this.livreService.mettreAJourLivre(this.livre); // Appelle la méthode mettreAJourLivre() du service LivreService pour mettre à jour le livre
    this.router.navigate(['/livres']); // Redirige vers la liste des livres après la mise à jour
  }
}
