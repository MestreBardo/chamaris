import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/servicos/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.scss']
})
export class ShowcaseCardComponent implements OnInit {
  @Input() pokemon: any;
  pokemonCarregado: any;
  imageUrl: any;
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.imageUrl = '';
    this.pokemonService
    .buscarPokemonURL(this.pokemon.url)
    .then((pokemon: any) => {
      this.pokemonCarregado = pokemon;
      setTimeout(() => {
        this.imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonCarregado.id}.png`;
      }, 1000);
    });
  }

  abrirPokemon() {
    this.router.navigate(['Main', 'pokemon'])
  }

}
