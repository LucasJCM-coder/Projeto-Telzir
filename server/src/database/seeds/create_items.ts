import {Knex} from 'knex';

export async function seed(knex: Knex) {
  await knex('CallCosts').insert([
    { DDD_origem: '11', DDD_destino: '16', custo: '1.90'},
    { DDD_origem: '11', DDD_destino: '17', custo: '1.70'},
    { DDD_origem: '11', DDD_destino: '18', custo: '0.90'},
    { DDD_origem: '16', DDD_destino: '11', custo: '2.90'},
    { DDD_origem: '17', DDD_destino: '11', custo: '2.70'},
    { DDD_origem: '18', DDD_destino: '11', custo: '1.90'},
  ]);
  
}