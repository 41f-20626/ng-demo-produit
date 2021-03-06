import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';


@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  estConnecte:boolean;
  sTitre:string;
  constructor(private authServ:AuthService) {
    
  }

  ngOnInit(): void {
    //this.estConnecte = this.authServ.getConnexion();
    this.authServ.statut().subscribe(bLogin=>{
      this.estConnecte = bLogin;
    })
    this.authServ.getTitre().subscribe(leTitre =>{
      this.sTitre = leTitre;
    })
  }

  changeConnexion():void{
    // Changer l'état de connexion dans mon service.
    this.authServ.setConnexion(this.estConnecte);
  }

}
