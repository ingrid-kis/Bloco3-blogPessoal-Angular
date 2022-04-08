import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  user: User = new User();
  confirmarSenha: string;
  tipoUsuario: string;
  idUser:number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
}

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
}

  editar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
        this.alertas.showAlertDanger('As senhas não coincidem. Tente novamente!')
    }else{
      this.authService.atualizar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/start'])
        this.alertas.showAlertInfo('Usuário atualizado com sucesso! Faça o login novamente')
        environment.token = ''
        environment.foto = ''
        environment.nome = ''
        environment.usuario = ''
        environment.id = 0
        this.router.navigate(['/login'])
        })
    }
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp:User)=>{
      this.user = resp
      console.log(this.user)
    })
  }

}
