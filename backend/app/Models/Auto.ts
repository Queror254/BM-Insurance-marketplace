import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Auto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string;

  @column()
  public lastName: string;

  @column.dateTime()
  public dob: DateTime;

  @column()
  public streetAddress: string;

  @column()
  public city: string;

  @column()
  public state: string;

  @column()
  public zipCode: number;

  @column()
  public phoneNumber: string;

  @column()
  public email: string;

  @column()
  public contactTime: string;

  @column()
  public preferredContactMethod: string;

  @column()
  public placeOfResidence: string

  @column()
  public vehicleMake: string

  @column()
  public vehicleModel: string

  @column()
  public vehicleYear: number

  @column()
  public haveVehicleInsurance: string

  @column()
  public safetyFeature: string

  @column()
  public automobileVin: string

  @column()
  public vehicleUsage: string

  @column()
  public Drivers: string

  @column()
  public mileage: number

  @column()
  public licenseIssueDate: string

  @column()
  public accidentHistory: string

  @column()
  public accidentDesc: string

  @column()
  public gender: string

  @column()
  public maritalStatus: string

  @column()
  public creditScore: string

  @column()
  public getDiscount: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
