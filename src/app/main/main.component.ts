import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  open = false;
  constructor() { }

  ngOnInit() {
  }

}
