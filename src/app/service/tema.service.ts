import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

/* Aqui: Métodos de consumo da minha API, da minha classe e model Tema
1º fazer construtor do HttpClient - p/ métodos ficarem disponíveis
2º criar objeto Token, que recebe o Headers do Postman.
Set - colocar, no Authorization o valor: enviromment.token (quando se loga, o token fica lá)
3º Criar os métodos dos gets - "pegar/retorna consulta" com nomes óbvios e os posts (adiciona infos).
! Se o getAllTema pega todos os temas, ele precisa de um array. Observable<Tema[]>
! Método postTema precisa de um tema pra postar, então colocamos o objeto tema do tipo Tema + Observable de Tema único (sem array)

*/ 

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("https://blog-pessoal-kis.herokuapp.com/tema", this.token)
  }

  postTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>("https://blog-pessoal-kis.herokuapp.com/tema", tema, this.token)
  }

}