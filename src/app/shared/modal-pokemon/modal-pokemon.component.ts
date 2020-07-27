import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/servicos/pokemon.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss']
})
export class ModalPokemonComponent implements OnInit {
  @Input() url: string;
  constructor(private pokemonService: PokemonService, public bsModalRef: BsModalRef) { }
  pokemon: any;
  imageUrl = '';
 

  ngOnInit(): void {
    this.pokemonService
      .buscarPokemonURLFull(this.url)
      .then((pokemon: any) => {
        this.pokemon = pokemon;
        setTimeout(() => {
          this.imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemon.id}.png`;
        }, 1000);
      });

  }

  teste() {
    console.log('teste');
  }

}
