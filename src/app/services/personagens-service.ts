import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPersonagem {
  id: number;
  nome: string;
  imagem: string;
  votos: number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getPersonagens(): Observable<IPersonagem[]> {
    return this.httpClient.get<IPersonagem[]>(`${this.baseUrl}/personagens`);
  }

  votarPersonagem(id: number, totalVotos: number) {
    return this.httpClient.patch(`http://localhost:3000/personagens/${id}`, {
      votos: totalVotos + 1,
    });
  }

  getPersonagemPorId(id: number) {
    return this.httpClient.get<IPersonagem>(this.baseUrl + '/personagens/' + id);
  }
}
