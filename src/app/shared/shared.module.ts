import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemLoaderDirective } from './directives/imagem-loader.directive';



@NgModule({
  declarations: [ImagemLoaderDirective],
  imports: [
    CommonModule
  ],
  exports: [ImagemLoaderDirective]
})
export class SharedModule { }
