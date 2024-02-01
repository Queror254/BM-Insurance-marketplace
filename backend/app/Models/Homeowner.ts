import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Homeowner extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string;

  @column()
  public middleName

  @column()
  public lastName: string;

  @column()
  public state: string;

  @column()
  public zipCode: number;

  @column()
  public goal: string;

  @column()
  public discoverySource: string;

  @column()
  public recommendToFriend: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
