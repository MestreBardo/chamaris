import { MainRoutingModule } from './main-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CardComponent } from './carrinho/card/card.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MainComponent, CarrinhoComponent, CardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
