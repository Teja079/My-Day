require('dotenv').config()
const { MongoClient } = require('mongodb')
const logger = require('./logger.service')

// Read and validate URI from env
const rawUri =
  process.env.MONGODB_URI ||
  process.env.MONGO_URL ||
  'mongodb://127.0.0.1:27017/my-day-db'
const uri = String(rawUri || '').trim()

if (!uri || !uri.startsWith('mongodb')) {
  throw new Error(`Invalid MONGODB_URI. Got: "${uri}"`)
}

// Extract DB name from URI, fallback to 'my-day-db'
const m = uri.match(/\/([^/?]+)(\?|$)/)
const dbName = m && m[1] ? m[1] : 'my-day-db'

let clientPromise = null
let dbInstance = null

async function getDb() {
  if (dbInstance) return dbInstance

  if (!clientPromise) {
    clientPromise = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((client) => {
        logger.info('Connected to MongoDB')
        dbInstance = client.db(dbName)
        return dbInstance
      })
      .catch((err) => {
        clientPromise = null
        logger.error('Cannot Connect to DB', err)
        throw err
      })
  }
  return clientPromise
}

async function getCollection(collectionName) {
  try {
    const db = await getDb()
    return db.collection(collectionName)
  } catch (err) {
    logger.error('Failed to get Mongo collection', err)
    throw err
  }
}

module.exports = {
  getCollection,
}




