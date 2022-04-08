import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService,
  ) { }

  ngOnInit() { //comando que significa: quando minha página iniciar, faça ... 
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe({ next:(resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token;
      environment.nome = this.userLogin.nome;
      environment.foto = this.userLogin.foto;
      environment.id = this.userLogin.id;


      //this.userLogin.foto

      this.router.navigate(["/start"])
      },
      error: erro => {
      if(erro.status == 401){
        this.alertas.showAlertDanger("Usuário e/ou Senha incorretos!")
      }
      },
      });
  }
}
      //valida todas as infos, erros no script..
      //console.log(environment.token);
      //console.log(environment.nome);
      //console.log(environment.foto);
      //console.log(environment.id);