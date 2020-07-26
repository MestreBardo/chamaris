import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemLoaderDirective } from './directives/imagem-loader.directive';
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [ImagemLoaderDirective],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ImagemLoaderDirective]
})
export class SharedModule { }
