import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(Roles.USER)
      table.string('first_name', 50).notNullable().unique()
      table.string('second_name', 50).notNullable().unique()
      table.string('email', 100).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('confirm_password', 180).notNullable()
      table.string('street_address').notNullable()
      table.string('apt_no').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.integer('zip_code').notNullable().unsigned()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
