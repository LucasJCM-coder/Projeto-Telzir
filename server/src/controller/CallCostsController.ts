import { Request, Response } from 'express';

import knex from '../database/connection';
import CalculateCostsCall from '../utils/CalculateCostCall'; 

class CallCostsController {
    async index(request: Request, response: Response) { 
        
        const { source, destiny, minutes, plan } = request.params;

        const getRowCosts = await knex('CallCosts')
        .where('DDD_origem', String(source))
        .where('DDD_destino', String(destiny))
        .select('custo').first();

        if(!getRowCosts){
            return response.json({
                custoSemPlano: NaN,
                custoComPlano: NaN
            });
        }
        const {custo} = getRowCosts;
        const results = CalculateCostsCall(custo, minutes, plan);
    
        return response.json(results);
    }
}

export default CallCostsController;