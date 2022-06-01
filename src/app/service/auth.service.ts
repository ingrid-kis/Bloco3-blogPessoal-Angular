import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
}

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blog-pessoal-kis.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blog-pessoal-kis.herokuapp.com/usuarios/cadastrar', user)
  }

  atualizar(user: User): Observable<User>{
    return this.http.put<User>('https://blog-pessoal-kis.herokuapp.com/usuarios/atualizar', user, this.token )
  }

  logado(){
    let ok: boolean = false;

    if (environment.token != ""){ //se meu environment for diferente de vazio
      ok = true //ok recebe true
    }
    return ok
  }
  
  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blog-pessoal-kis.herokuapp.com/usuarios/${id}`, this.token)
  }

  adm(){
    let ok: boolean = false;

    if (environment.tipo == "adm"){ //se meu environment for diferente de vazio
      ok = true //ok recebe true
    }
    return ok
  }

}
