import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('CallCosts', (table) => {
    table.increments('id').primary();
    table.string('DDD_origem', 2).notNullable();
    table.string('DDD_destino', 2).notNullable();
    table.string('custo').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points');
}