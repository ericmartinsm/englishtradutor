import { Component, OnInit, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.moldel';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

// property binding possibilita a alteraçao de valores dos atributos html do nosso template

  @Input() public tentativas: number; // sera decorada com o valor recebido no momento da instancia do apptentantivas no componente painel

  public coracoes : Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
   }

  ngOnChanges(){
    console.log('tentativas recebidas do painel:', this.tentativas)
    console.log('tamanho do array coracoes',this.coracoes.length)
    if(this.tentativas !== this.coracoes.length){  // se tentativas não for identico a coracoes.length= tamanho de array de coracoes.... entao...
      let indice = this.coracoes.length - this.tentativas//indice=  3 - 2 = 1 isso se errar 1 vez
      console.log('aqui vai o let indice', indice)
      this.coracoes[indice-1].cheio = false; // this.coracoes[1]= coracao na primeira posicao= false
    }
  }

  ngOnInit() { // metodo ngOnInit é um metodo do ciclo de vida do componente/ ngOninit é executado apenas uma 
    //unica vez quando o componente é iniciado

  }

}
