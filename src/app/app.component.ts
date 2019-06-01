import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My awesome angular project';
  //propriété d'authentification de l'utilisateur globale (property binding)
  isAuth = false;
  //création de variable
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';
  //contructeur
  constructor() {
    //après 4 secondes isAuth deviendra vrai et le bouton sera activé
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer(){
    console.log('On allume tout !');
  }

}
