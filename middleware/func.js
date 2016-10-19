import _ from 'lodash'

//检查传过来的函数名是否正确
export function checkFindMethods(req, res, next) {
  let {methods} = req.db
  if(methods) {
    methods = _.keys(methods).filter((method) => ['limit', 'sort'].indexOf(method) === -1)
    if(methods.length > 0){
      res.status(500).json({ error: methods.join(',')+"error" })
      return
    }
  }
  next()
}

//统一处理请求参数包括 dbname collection
export function handleDBMethod(req, res, next) {
  let db = {}
  const header = req.headers["x-db"]
  if(header){
    const {query, methods} = JSON.parse(header)
    _.set(req.db, 'query', query)
    _.set(req.db, 'methods', methods)
  }
  next()
}
