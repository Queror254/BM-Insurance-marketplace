import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'businesses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable();
      table.string('middle_name').notNullable();
      table.string('last_name').notNullable();
      table.string('state').notNullable();
      table.integer('zip_code').notNullable(); // Changed to integer
      table.string('goal').notNullable();
      table.string('discovery_source').notNullable();
      table.string('recommend_to_friend').notNullable();


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
