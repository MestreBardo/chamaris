import { InicioRoutingModule } from './inicio-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseCardComponent } from './showcase/showcase-card/showcase-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [InicioComponent, ShowcaseComponent, ShowcaseCardComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
