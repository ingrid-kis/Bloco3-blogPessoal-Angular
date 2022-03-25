import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [

  {path:"", redirectTo: "login", pathMatch: "full"},
  
  {path: "login", component: LoginComponent},
  {path: "menu", component: MenuComponent},
  {path: "sign", component: SignComponent},
  {path: "footer", component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
