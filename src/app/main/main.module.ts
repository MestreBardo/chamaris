import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



@NgModule({
  declarations: [MainComponent, CarrinhoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
