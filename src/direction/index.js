import { Provider } from '../provider.js';
class __DirectionProvider__ extends Provider{
    constructor(component, dir){
        super(component)
        this.setAttr({
            dir 
        })
        this.style({color : 'red'})
    }
}

export const DirectionProvider = (component, {dir}) => new __DirectionProvider__(component, dir);