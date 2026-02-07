import { UIElement } from "ziko/src/ui/constructors/UIElement.js"

export class Provider extends UIElement{
    constructor(component){
        super({ element : component.element})
    }
}