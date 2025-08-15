import { Component } from '@angular/core';
import { CardPersonagem } from '../card-personagem/card-personagem';
import { PersonagensService } from '../../services/personagens-service';

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
  personagens: IPersonagem[] = [];

  constructor(private personagemService: PersonagensService) {
    this.personagens = this.personagemService.getPersonagens();
  }

  incremetarVotoPersonagem(id: number) {
    this.personagemService.votarPersonagem(id);
  }
}
