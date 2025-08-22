import { Routes } from '@angular/router';
import { ListaPersonagem } from './components/lista-personagem/lista-personagem';
import { CardPersonagem } from './components/card-personagem/card-personagem';
import { DetalhePersonagem } from './components/detalhe-personagem/detalhe-personagem';

export const routes: Routes = [
  {
    path: '',
    component: ListaPersonagem,
  },
  {
    path: 'personagens/:id',
    component: DetalhePersonagem,
  }
];
