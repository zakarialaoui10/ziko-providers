import { UIElement } from "ziko/src/ui/index.js";

export class Provider extends UIElement{
    constructor(component){
        super({ element : component instanceof Provider ? component.component.element : component.element})
    }
}