import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit, OnDestroy {

  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  pokemonsCarrinho = [];
  valorCarrinho = 0;
  subscription: Subscription;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.subscription = this.storageService.atualizarCarrinho
      .subscribe((carrinhoAtual: any) => {
        this.pokemonsCarrinho = carrinhoAtual.pokemon;
        this.valorCarrinho = carrinhoAtual.valorTotal;
      });
    this.storageService.carregarCarrinhoAtual();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
