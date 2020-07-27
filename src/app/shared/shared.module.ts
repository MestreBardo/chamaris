import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemLoaderDirective } from './directives/imagem-loader.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalPokemonComponent } from './modal-pokemon/modal-pokemon.component';


@NgModule({
  declarations: [ImagemLoaderDirective, ModalPokemonComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ImagemLoaderDirective, ModalPokemonComponent]
})
export class SharedModule { }
