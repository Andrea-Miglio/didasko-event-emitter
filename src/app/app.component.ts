import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  prodotto:string = "-";
  prezzo:number = 0;

  aggiungiProdotto(event){
  
    this.prodotto = event.prodotto;
    this.prezzo = event.prezzo;
  }
}
