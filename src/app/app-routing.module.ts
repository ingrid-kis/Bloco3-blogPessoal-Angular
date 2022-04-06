import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignComponent } from './sign/sign.component';
import { StartComponent } from './start/start.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:"", redirectTo: "login", pathMatch: "full"},
  
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenuComponent},
  {path: "sign", component: SignComponent},
  {path: "footer", component: FooterComponent},
  {path: "start", component: StartComponent},
  {path: "tema", component: TemaComponent},

  //para passar parâmetro por rota no Angular:
  {path: "tema-edit/:id", component: TemaEditComponent},
  {path: "tema-delete/:id", component: TemaDeleteComponent},
  {path: "postagem-edit/:id", component: PostagemEditComponent},
  {path: "postagem-delete/:id", component: PostagemDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
