require('dotenv').config()
const { MongoClient } = require('mongodb')

async function run() {
  const uri = (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-day-db').trim()
  const m = uri.match(/\/([^/?]+)(\?|$)/)
  const dbName = m && m[1] ? m[1] : 'my-day-db'

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = client.db(dbName)
  const col = db.collection('board')

  const count = await col.countDocuments()
  if (count === 0) {
    await col.insertMany([
      {
        title: 'My First Board',
        createdAt: Date.now(),
        createdBy: { _id: 'seed-user', fullname: 'You' },
        members: [],
        labels: [],
        groups: [],
        activities: []
      }
    ])
    console.log('Seeded sample boards')
  } else {
    console.log('Boards already exist:', count)
  }
  await client.close()
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})