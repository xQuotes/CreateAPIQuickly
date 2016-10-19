import _ from 'lodash'

export function decorateData(data, methods) {
  _.mapValues(methods, (params, func) => {
    data = data[func](params)
  })
  return data.toArray()
}