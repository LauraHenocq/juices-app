import GroceryType from './GroceryType'
import { EmptyError } from '~/error/EmptyError'
import { ValidationError } from '~/error/ValidationError'

export class Grocery {
  private _id: string
  private _name: string
  private _image: string
  private _type: GroceryType
  private _local: boolean
  private _months: Array<number>

  public get id () : string {
    return this._id
  }

  public get name () : string {
    return this._name
  }

  public get image () : string {
    return this._image
  }

  public get type () : GroceryType {
    return this._type
  }

  public get local () : boolean {
    return this._local
  }

  public get months () : Array<number> {
    return this._months
  }

  constructor (
    id: string,
    name: string,
    image: string,
    type: GroceryType,
    local: boolean,
    months: Array<number>
  ) {
    this._id = id
    this._name = name
    this._image = image
    this._type = type
    this._local = local
    this._months = months
  }

  public static create (
    id: string,
    name: string,
    image: string,
    type: GroceryType,
    local: boolean,
    months: Array<number>
  ) {
    if (name.length === 0) {
      throw new EmptyError('Le nom de l\'ingrédient doit être renseigné')
    }

    if (months.length < 1) {
      throw new ValidationError('Au moins 1 mois doit être renseigné')
    }

    return new Grocery(id, name, image, type, local, months)
  }

  public equals (grocery: Grocery) {
    return this.id === grocery.id
  }
}
