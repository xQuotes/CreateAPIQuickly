import _ from 'lodash'

import {
  checkDBAuth, checkFindMethods, handleDBMethod
} from './func'
import {
  baseUrl
} from '../url'
export default function middleware(app){
  app.use('/api/:dbName', checkDBAuth)
  app.use('/api/:dbName', handleDBMethod)
  app.use(baseUrl, checkFindMethods)
}
