import { DirectionProvider } from 'ziko-providers/direction';
import {tags} from 'ziko/ui'

globalThis.app = DirectionProvider(
  tags.p('hello from provider'),
  { dir : 'ltr'}
)

document.body.append(app.element)