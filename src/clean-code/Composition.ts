;(() => {
  // Aplicando Single Responsibility
  // Aplicando Composition

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class Attributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class Events {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  // Now using composition

  interface InputElementProps {
    id: string
    type: HtmlType
    value: string
    placeholder: string
  }

  class InputElement {
    htmlElement: HtmlElement
    events: Events
    attributes: Attributes

    constructor({ id, type, value, placeholder }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, type)
      this.events = new Events()
      this.attributes = new Attributes(value, placeholder)
    }
  }

  const newInput = new InputElement({
    id: '1',
    type: 'input',
    value: '1',
    placeholder: '1',
  })

  console.log('newInput', newInput)
})()
