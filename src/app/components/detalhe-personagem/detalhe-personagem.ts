import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IPersonagem,
  PersonagensService,
} from '../../services/personagens-service';

@Component({
  selector: 'app-detalhe-personagem',
  imports: [],
  templateUrl: './detalhe-personagem.html',
  styleUrl: './detalhe-personagem.css',
})
export class DetalhePersonagem implements OnInit {
  idPersonagem: number = 0;
  personagem?: IPersonagem;

  constructor(
    private route: ActivatedRoute,
    private servico: PersonagensService
  ) {}

  ngOnInit(): void {
    this.idPersonagem = Number(this.route.snapshot.paramMap.get('id'));
    this.servico
      .getPersonagemPorId(this.idPersonagem)
      .subscribe((personagem) => {
        this.personagem = personagem;
      });
  }
}
