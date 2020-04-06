// app/ts/services/NegociacaoService.ts

import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    async obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            );
    }
}

export interface ResponseHandler {
    (res: Response): Response;
}