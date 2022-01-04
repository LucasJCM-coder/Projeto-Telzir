import { Request, Response } from 'express';
import knex from '../database/connection';

class AvaiableDDDController {

    async index(request: Request, response: Response) { 
        
        const { source } = request.params;

        const AvaiableDDD = await knex('CallCosts')
        .where('DDD_origem', String(source))
        .select('DDD_destino');


        const output = AvaiableDDD.map(x => ( {value:x.DDD_destino, label:x.DDD_destino} ))
        return response.json(output);
    }
}


export default AvaiableDDDController;