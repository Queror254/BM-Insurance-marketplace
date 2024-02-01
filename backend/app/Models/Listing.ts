import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Listing extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public companyName: string

  @column()
  public coverage: string

  @column()
  public payment: number

  @column()
  public discount: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
