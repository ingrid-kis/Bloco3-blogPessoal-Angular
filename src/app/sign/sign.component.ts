import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  
  user: User = new User;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService, //tudo dentro do construtor é injeção de dependência
    private router: Router,
    
  ) { }

  ngOnInit() { //comando que significa: quando minha página iniciar, faça ... 
    window.scroll(0,0)
  }

  confiSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha ){
      alert("As senhas não estão iguais!")
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User)=> {
        this.user = resp
        this.router.navigate(["/login"])
        alert("Usuário cadastrado com sucesso!")
      })
    }
  }
}