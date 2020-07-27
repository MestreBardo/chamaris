import { Component, OnInit, Directive, OnDestroy } from '@angular/core';
import { StorageService } from 'src/servicos/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  valorCarrinho = 0;
  subscription: any;
  open = false;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.subscription = this.storageService.atualizarCarrinho.subscribe(carrinhoAtualizado => {
      this.valorCarrinho = carrinhoAtualizado.valorTotal;
    });
    this.storageService.carregarCarrinhoAtual();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
