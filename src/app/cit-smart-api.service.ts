import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DadosAPI {
  dateTime: string;
  dateTimeMilliseconds: number;
  operationID: number;
  error: any;
  result: any[]; 
}


@Injectable({
  providedIn: 'root',
})
export class CitSmartApiService {
  private apiUrl = 'https://gsm-hmg.centralitcloud.com.br/citsmart/services';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = {
      clientId: 'API_PBI',
      language: 'pt_BR',
      userName: 'citsmart.local\\' + username,
      password: password,
    };
    return this.http.post(`${this.apiUrl}/login`, body, {
      headers: this.headers,
    });
  }

  getData(token: string): Observable<DadosAPI> {
    const body = {
      sessionID: token,
      queryName: 'DESAFIODEV',
    };
    return this.http.post<DadosAPI>(`${this.apiUrl}/data/query`, body, {
      headers: this.headers,
    });
  }

  getFechadaData(token: string): Observable<any[]> {
    return this.getData(token).pipe(
      map((data: DadosAPI) => {
        if (data && data.result) {
          return data.result.filter((item) => item.situacao === 'Fechada');
        } else {
          return [];
        }
      })
    );
  }

  getCanceladaData(token: string): Observable<any[]> {
    return this.getData(token).pipe(
      map((data: DadosAPI) => {
        if (data && data.result) {
          return data.result.filter((item) => item.situacao === 'Cancelada');
        } else {
          return [];
        }
      })
    );
  }

  getEmAndamentoData(token: string): Observable<any[]> {
    return this.getData(token).pipe(
      map((data: DadosAPI) => {
        if (data && data.result) {
          return data.result.filter((item) => item.situacao === 'Em andamento' || item.situacao === 'Reaberta');
        } else {
          return [];
        }
      })
    );
  }

  getItemById(token: string, id: number): Observable<any> {
    return this.getData(token).pipe(
      map((data: DadosAPI) => {
        if (data && data.result) {
          return data.result.filter((item) => item.idsolicitacaoservico == id);
        } else {
          return [];
        }
      })
    );
  }
  
}
