class RecommendedClassStructure {
  // 1.- Propiedades
  // Static - Publicas
  public static domReady: boolean = false

  // Private
  private _id: string
  private type: string

  // 2.- Constuctores estaticos
  static createInput(id: string, type: string) {
    return new RecommendedClassStructure(id, type)
  }

  // 3.- Constructor Privado
  constructor(id: string, type: string) {
    ;(this._id = id), (this.type = type)
  }

  // 4.- Metodos
  setType(type: string) {
    this.type = type
  }

  // 5.- Getter & Setter
  get id(): string {
    return this.id
  }
}
