import Promise from 'bluebird'
import { ObjectId } from 'mongodb'
import _ from 'lodash'
import moment from 'moment'

const MongoClient = Promise.promisifyAll(require("mongodb").MongoClient)

import { decorateData } from '../common/utils'

class Model {
  constructor(url) {
    this.connect  = MongoClient.connect(url)
  }
  insert(collectionName, fileds={}, methods={}) {
    return this.connect.then((db)=> {
      return db.collection(collectionName).insert({
        create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        ...fileds
      }).then( (result)=>{
          //Todo: result.insertedIds
          //返回修改后的数据
      })
    })
  }
  insertOne(collectionName, fileds={}, methods={}) {
    return this.connect.then((db)=> {
        return db.collection(collectionName).insertOne({
          create_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          ...fileds
        }).then((result)=>{
          return this.findById(collectionName, result.insertedId)
        })
      })
  }
  findOne(collectionName, query={}, methods={}) {
    return this.connect
    .then((db)=> db.collection(collectionName).findOne(query))
  }
  findById(collectionName, _id) {
    return this.findOne(collectionName, {'_id': new ObjectId(_id)})
  }
  find(collectionName, query={}, methods={}) {
    return this.connect
    .then((db) => db.collection(collectionName).find(query))
    .then((data) => decorateData(data, methods))
  }
  updateOne(collectionName, query={}, fileds={}, methods={}) {
    return this.connect
    .then(db=> db.collection(collectionName).updateOne(query, {
          update_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          ...fileds
    }))
  }
  updateById(collectionName, _id='', fileds={}, methods={}) {
    return this.updateOne(collectionName, {'_id': new ObjectId(_id)}, {
      update_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      ...fileds
    }, methods)
  }
  update(collectionName, query={}, fileds={}, methods={}) {
    return this.connect
    .then((db) => db.collection(collectionName).update(query, {
      update_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      ...fileds
    }))
  }
  removeOne(collectionName, query={}) {
    return this.connect
    .then(db=> db.collection(collectionName).removeOne(query))
  }
  removeById(collectionName, _id='') {
    return this.removeOne(collectionName, {'_id': new ObjectId(_id)})
  }
  remove(collectionName, query={}) {
    return this.connect
    .then((db) => db.collection(collectionName).remove(query))
  }
}

export default function getModel(url) {
  getModel[url] = getModel[url] || new Model(url)
  return getModel[url]
}
