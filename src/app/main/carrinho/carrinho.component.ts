import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  pokemonsCarrinho = [];

  constructor() { }

  ngOnInit() {
  }

}
