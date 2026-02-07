import './index.css'
import { 
  createI18NProvider,
  useTranslation
} from 'ziko-providers';
import {tags} from 'ziko/ui'
import locals from './locals.json'

createI18NProvider('en', locals)

const App = () =>{
  const { a, span, button : btn, nav} = tags
  const [t, setLang] = useTranslation()
  return nav(
    a({href : "#"}, t('home')),
    a({href : "#"}, t('about')),
    a({href : "#"}, t('start')),
    a({href : "#"}, t('components')),
    span(
      btn('En').onClick(()=>setLang('en')),
      btn('Fr').onClick(()=>setLang('fr')),
      btn('Es').onClick(()=>setLang('es'))
    )
  )
} 
App().mount(document.body)


