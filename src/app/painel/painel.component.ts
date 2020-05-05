import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  public instrucao: string = 'Traduza a Frase:';
  public frases: Frase[] = FRASES;
  public resposta: String = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;  


  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter(); //encerraJogo: atibuto do tipo eventemitte<qual tipo de objeto vai se trabalhado> cria um atributo chamado encerrarJogo do componente painel, associa uma instancia da classe eventEmitter() e ao termino de tudo isso decore esse atributo de tal modo que ele possa ser exposto para componentes pais



  public tentativas: number=3;// sera p

  public progresso: number=0;
  



  constructor() { 
    this.atualizaRodada();// vai armazenar temporariamente na var rodadaFrase do tipo Frase, a Classe frases com o array de numero this.rodada
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    console.log('componente foi destruido')
  }
  
  public atualizaResposta(resposta: Event): void{// funcao publica chamada atualizaResposta que vai receber um EVENT e vai armazenar naa variavel resposta temporariamente
    this.resposta = (<HTMLInputElement>resposta.target).value // irá buscar dentro de target o elemento value, no qual esta o que foi digitado no textarea
    console.log(this.resposta);
  }
  public verificarResposta(): void{ //void significa que nao tem retorno
    //trocar pergunta da rodada  
    if(this.rodadaFrase.frasePtbr==this.resposta){
      
      alert('A tradução esta correta')
      
      this.rodada++;

      this.progresso = this.progresso + 25; 

      if(this.rodada ===4){
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizaRodada();
      //progresso
                
      
    }
    else{

      this.tentativas--
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }  
    }    
  }
  
  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma coisa
    this.rodadaFrase= this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }
}
