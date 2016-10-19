import _ from 'lodash'

import {
  checkFindMethods, handleDBMethod
} from './func'
import {
  baseUrl
} from '../url'
export default function middleware(app){
  app.use('/api/:dbName', handleDBMethod)
  app.use(baseUrl, checkFindMethods)
}
