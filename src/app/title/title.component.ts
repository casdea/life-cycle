import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  nomeCliente : string = 'CARLOS RUI BARBOSA';
  @Input() enderecoCliente : string = '';

  constructor() {
    console.log("Construtor");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes ${this.enderecoCliente}`);
  }

  ngOnInit(): void {
    console.log(`OnInit ${this.enderecoCliente}`);

    this.nomeCliente = `ola ${this.nomeCliente}`;
  }

}
