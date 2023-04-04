import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artigos', component: ArtigosComponent},
  {path: 'photos', component: PhotoComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

