import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css'],
})
export class FiglioComponent implements OnInit {
  @Output() aggiungi = new EventEmitter();
  prodotti: any = [];
  indice: number = 0;
  constructor() {
    this.prodotti.push({ prodotto: 'Penna', prezzo: 1.5 });
    this.prodotti.push({ prodotto: 'Matita', prezzo: 0.5 });
    this.prodotti.push({ prodotto: 'Quaderno', prezzo: 2.5 });
    this.prodotti.push({ prodotto: '-', prezzo: 0 });
  }

  aggiungiCarrello(indice: number) {
    this.indice = indice;
    this.aggiungi.emit(this.prodotti[indice]);
  }
  ngOnInit() {}
}
