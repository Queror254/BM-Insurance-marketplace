import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'autos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.date('dob').notNullable();
      table.string('street_address').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.integer('zip_code').notNullable(); // Changed to integer
      table.string('phone_number').notNullable();
      table.string('email').notNullable();
      table.string('contact_time').notNullable();
      table.string('preferred_contact_method').notNullable();
      table.string('place_of_residence').notNullable();
      table.string('vehicle_make').notNullable();
      table.string('vehicle_model').defaultTo('DEFAULT_VALUE_HERE');
      table.integer('vehicle_year').notNullable(); // Changed to integer
      table.string('have_vehicle_insurance').notNullable();
      table.string('safety_feature').notNullable();
      table.string('automobile_vin').notNullable();
      table.string('vehicle_usage').notNullable();
      table.string('Drivers').notNullable();
      table.integer('mileage').notNullable(); // Changed to integer
      table.string('license_issue_date').notNullable();
      table.string('accident_history').notNullable();
      table.string('accident_desc').notNullable();
      table.string('gender').notNullable();
      table.string('marital_status').notNullable();
      table.string('credit_score').notNullable();
      table.string('get_discount').notNullable();
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
