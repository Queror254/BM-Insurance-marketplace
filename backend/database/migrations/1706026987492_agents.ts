import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  protected tableName = 'agents'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(Roles.AGENT)
      table.string('first_name', 50).notNullable().unique()
      table.string('second_name', 50).notNullable().unique()
      table.string('email', 100).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('confirm_password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
