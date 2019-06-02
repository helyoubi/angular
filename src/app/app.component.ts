import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'My awesome angular project';
  // propriété d'authentification de l'utilisateur globale (property binding)
  isAuth = false;
  // Création d'un tableau d'appareils
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  // Utilisation du pipe angular , simuler l'attente de l'arriver des données par serveur (utilisation de async)
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

// contructeur
constructor() {
  // après 4 secondes isAuth deviendra vrai et le bouton sera activé
  // (pour simuler le temps d'un appel API)
  setTimeout(() => {
    this.isAuth = true;
  }, 4000);
}

onAllumer() {
  console.log('On allume tout !');
}

}
