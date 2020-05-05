import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @Input() public NUMERO: number=0;  // aqui esta dizendo que o meu componente progresso tem uma variavel que aceita parametros externos definidos na instancia do componente (no app-progresso, que esta no componente painel)
  
  constructor() {}

  ngOnInit() {
    
  }

}
