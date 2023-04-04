import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto com Angular'; 
  stitle = 'Criando Rotas'
  photos = [
    {
      url:
      "./assets/webb1.webp", 
      description: "Galáxia"
    },

   {
    url: "./assets/webb2.webp",
    description: "Galáxia Espiral"
    },
    {
      url: "./assets/webb3.webp",
      description: "Galáxias"
    }
  ]
}

