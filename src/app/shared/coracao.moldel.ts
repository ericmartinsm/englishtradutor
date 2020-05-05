export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'
        
        ){}

        public exibeCoracao(): string{ //string= vai retornar string ou seja, urlcoracaocheio ou urlcoracaovazio

            if(this.cheio==true) {
                return this.urlCoracaoCheio;
            }else{
                return this.urlCoracaoVazio;
            }
        }
}