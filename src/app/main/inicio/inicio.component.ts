import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  atualCordenadaX: number;
  atualPosicao = 0;
  @ViewChild('swipe', {static: true}) swipeEl: ElementRef;
  ngOnInit() {
  }

}
