import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem {
  nomePersonagem = 'Rick Sanchez';
  imagePersonagem = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  qtdVotosPersonagem = 0;

  incremetarVotoPersonagem() {
    this.qtdVotosPersonagem++;
  }
}
