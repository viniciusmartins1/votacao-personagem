import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';

interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Component({
  selector: 'app-lista-personagem',
  imports: [CardPersonagem],
  templateUrl: './lista-personagem.html',
  styleUrl: './lista-personagem.css',
})
export class ListaPersonagem {
  personagens: IPersonagem[] = [
    {
      id: 113231,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      votos: 0,
    },
    {
      id: 12312,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      votos: 0,
    },
    {
      id: 3342342,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      votos: 0,
    },
    {
      id: 4234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      votos: 0,
    },
    {
      id: 5234234,
      nome: 'Rick Sanchez',
      imagem: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      votos: 0,
    },
  ];

  incremetarVotoPersonagem(id: number) {
    const qualquerCoisa = this.personagens.find(
      (personagem) => personagem.id === id
    );
    qualquerCoisa!.votos++;
  }
}
