import { 
  DirectionProvider,
  createI18NProvider,
  useTranslation
} from 'ziko-providers';
import {tags} from 'ziko/ui'

const locals = {
  fr: {
      start : 'Commencer',
      end : 'Temriner'
  },
  en: {
      start : 'Start',
      end : 'End'
  }
}


createI18NProvider('fr', locals)


const App = () =>{

  const [t, setLang] = useTranslation()

  // setLang('en')

  return tags.p(
    t('start'), 
    tags.br(),
    tags.button("En").onClick(()=> setLang('en')),
    tags.button("fr").onClick(()=> setLang('fr'))
  ) 
} 
globalThis.prov = DirectionProvider(App(), { dir : 'ltr'})

prov.mount(document.body)


