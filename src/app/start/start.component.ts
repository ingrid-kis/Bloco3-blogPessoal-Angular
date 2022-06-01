import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  tituloPost: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  nomeTema: string;

  user: User = new User();
  idUser= environment.id;

  token= environment.token;

  //para usar order-by:
  key="data";
  reverse=true; //normalmente é false, mas queremos reverser, então TRUE.

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService,
    private alertas: AlertasService,
  ) { }

  ngOnInit() {

      if(environment.token == ""){
        this.alertas.showAlertInfo("Sua seção expirou, faça o login novamente.")
        this.router.navigate(["/login"])
      }

      this.auth.refreshToken();
      this.getAllTemas();
      this.getAllPostagens();
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User)=> {
      this.user = resp
    })
  }

  publicar(){
    this.tema.id= this.idTema
    this.postagem.tema= this.tema

    this.user.id = this.idUser //pega o usuário certo
    this.postagem.usuario = this.user //passa pra postagem

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem = resp
      this.alertas.showAlertSuccess("Postagem realizada com sucesso!")
      this.postagem = new Postagem() //limpa os campos do input
      this.getAllPostagens() //lista todas as postagens
    })
  }

  findByTituloPostagem(){

    if(this.tituloPost == ""){
      this.getAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost). subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){

    if(this.nomeTema == ""){
      this.getAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema). subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

}
