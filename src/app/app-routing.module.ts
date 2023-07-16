import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { MiseAJourLivreComponent } from './mise-a-jour-livre/mise-a-jour-livre.component';

const routes: Routes = [
  { path: '', redirectTo: '/livres', pathMatch: 'full' },     
  { path: 'livres', component: ListeLivresComponent },         
  { path: 'ajouter-livre', component: AjoutLivreComponent },   
  { path: 'mise-a-jour-livre/:id', component: MiseAJourLivreComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule]                    
})
export class AppRoutingModule { }
