import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { MiseAJourLivreComponent } from './mise-a-jour-livre/mise-a-jour-livre.component';

const routes: Routes = [
  { path: '', redirectTo: '/livres', pathMatch: 'full' },     // Définit une route par défaut qui redirige vers '/livres' lorsqu'aucun chemin n'est spécifié
  { path: 'livres', component: ListeLivresComponent },         // Définit une route pour afficher la composante 'ListeLivresComponent' lorsque le chemin est '/livres'
  { path: 'ajouter-livre', component: AjoutLivreComponent },   // Définit une route pour afficher la composante 'AjoutLivreComponent' lorsque le chemin est '/ajouter-livre'
  { path: 'mise-a-jour-livre/:id', component: MiseAJourLivreComponent } // Définit une route pour afficher la composante 'MiseAJourLivreComponent' avec un paramètre 'id' spécifié dans le chemin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   // Importe le module 'RouterModule' et configure les routes définies précédemment en utilisant la méthode statique 'forRoot'
  exports: [RouterModule]                    // Exporte le module 'RouterModule' pour le rendre accessible à d'autres modules de l'application
})
export class AppRoutingModule { }
