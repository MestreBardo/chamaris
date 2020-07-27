import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/servicos/pokemon.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalPokemonComponent } from 'src/app/shared/modal-pokemon/modal-pokemon.component';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.scss']
})
export class ShowcaseCardComponent implements OnInit {
  @Input() pokemon: any;
  pokemonCarregado: any;
  imageUrl: any;
  constructor(private pokemonService: PokemonService, private modalService: BsModalService) { }

  ngOnInit() {
    this.imageUrl = '';
    this.pokemonService
    .buscarPokemonURL(this.pokemon.url)
    .then((pokemon: any) => {
      console.log(pokemon)
      this.pokemonCarregado = pokemon;
      setTimeout(() => {
        this.imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonCarregado.id}.png`;
      }, 1000);
    });
  }

  abrirPokemon() {
   this.modalService.show(ModalPokemonComponent, {class: 'second-modal-backdrop h-75 modal-width-1000',
   initialState: {url: this.pokemon.url}, ignoreBackdropClick: true});
  }

}
