import { Injectable } from '@angular/core';
import { DefinicoesIniciais } from 'src/app/DefinicoesIniciais';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  quentes = DefinicoesIniciais.quentes;
  doForno = DefinicoesIniciais.doForno;
  constructor() { }
  initStorage() {
    localStorage.setItem('quentes', JSON.stringify(this.quentes));
    localStorage.setItem('doForno', JSON.stringify(this.doForno));
  }

  buscarStorage(valor: string) {
    return JSON.parse(localStorage.getItem(valor));
  }
}
