import { Injectable } from '@angular/core';
import { DefinicoesIniciais } from 'src/app/DefinicoesIniciais';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  atualizarCarrinho = new Subject<any>();
  initStorage() {
    const quentes = DefinicoesIniciais.quentes;
    const doForno = DefinicoesIniciais.doForno;
    const carrinhoAtual = DefinicoesIniciais.carrinhoInicial;
    localStorage.setItem('quentes', JSON.stringify(quentes));
    localStorage.setItem('doForno', JSON.stringify(doForno));
    if (!localStorage.getItem('carrinhoAtual')) {
      localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    }
  }

  buscarStorage(valor: string) {
    return JSON.parse(localStorage.getItem(valor));
  }

  carregarCarrinhoAtual() {
    this.atualizarCarrinho.next(JSON.parse(localStorage.getItem('carrinhoAtual')));
  }

  adicionarCarrinho(pokemon: any) {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoAtual'));
    const findIndex = carrinhoAtual.pokemon.findIndex( pokemonAtual => pokemonAtual.id === pokemon.id);
    if (findIndex === -1) {
      carrinhoAtual.pokemon.push(pokemon);
    } else {
      carrinhoAtual.pokemon[findIndex].quantidade += 1;
      carrinhoAtual.pokemon[findIndex].valor += pokemon.valor;
    }
    carrinhoAtual.quantidade += 1;
    carrinhoAtual.valorTotal += pokemon.valor;
    localStorage.setItem('carrinhoAtual', JSON.stringify(carrinhoAtual));
    this.atualizarCarrinho.next(carrinhoAtual);
  }
}
