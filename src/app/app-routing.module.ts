import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//llamada de componentes
import { InicioComponent} from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostresComponent } from './components/postres/postres.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
      { path:'', component: InicioComponent },
      { path:'menu',  component: MenuComponent},
      { path:'postres',  component: PostresComponent},
      { path:'registro',  component:  RegistroComponent},
      { path:'login', component: LoginComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
