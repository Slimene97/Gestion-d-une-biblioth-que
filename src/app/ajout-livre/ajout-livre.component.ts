import { Component } from '@angular/core';
import { Livre } from '../models/livre.model';
import { LivreService } from '../services/livre.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.css']
})
export class AjoutLivreComponent {
  nouveauLivre: Livre = {
    id: 0,
    intitule: '',
    auteur: '',
    anneePublication: 0
  };

  constructor(    private route: ActivatedRoute,
    private router: Router,private livreService: LivreService) {}

  ajouterLivre(): void {
    this.livreService.ajouterLivre(this.nouveauLivre);
    this.nouveauLivre = { id: 0, intitule: '', auteur: '',  anneePublication: 0 };
        this.router.navigate(['/livres']);

  }
}
