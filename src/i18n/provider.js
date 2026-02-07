export function createI18NProvider(lang, locals){
    if(!globalThis.__Ziko__.__PROVIDERS__) globalThis.__Ziko__.__PROVIDERS__ = {}
    globalThis.__Ziko__.__PROVIDERS__.i18n = {
        lang, 
        locals,
    }  
}