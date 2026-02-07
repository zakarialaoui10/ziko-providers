import { useState } from 'ziko/hooks';

export function useTranslation(
    initialLang = __Ziko__?.__PROVIDERS__?.i18n?.lang, 
    locals = __Ziko__.__PROVIDERS__?.i18n?.locals
) {
    const [getLang, setLang] = useState(initialLang);

    setLang(initialLang)

    function t(key) {
        return () => ({
            value : locals[getLang().value][key],
            isStateGetter: () => true,
            _subscribe: (fn) => {
                getLang()._subscribe(() => fn(locals[getLang().value][key]));
            }
        });
    }

    return [t, setLang];
}

