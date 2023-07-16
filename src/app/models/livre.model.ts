export class Livre {
  id: number;                
  intitule: string;          
  auteur: string;            
  anneePublication: number;  
  constructor(id: number, titre: string, auteur: string, editeur: string, anneePublication: number) {
    this.id = id;                        
    this.intitule = titre;               
    this.auteur = auteur;                
    this.anneePublication = anneePublication; 
  }
}