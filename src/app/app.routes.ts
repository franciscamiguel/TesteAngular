import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { IntroducaoComponent } from './components/introducao/introducao.component';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "contatos",component: ContatosComponent},
  {path:"introducao", component: IntroducaoComponent}
];
