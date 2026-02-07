import { Provider } from '../provider.js';
class __I18NProvider__ extends Provider{
    constructor(component, {lang, locals}){
        super(component)
        document.documentElement.lang = lang;
        if(!globalThis.__Ziko__.__PROVIDERS__) globalThis.__Ziko__.__PROVIDERS__ = {}
        globalThis.__Ziko__.__PROVIDERS__.i18n = {
            lang, 
            locals
        }
    }
}

export const I18NProvider = (component, {lang, locals}) => new __I18NProvider__(component, {lang, locals});