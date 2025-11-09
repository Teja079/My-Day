require('dotenv').config()
const { MongoClient } = require('mongodb')

async function clearActivities() {
  try {
    const uri = (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-day-db').trim()
    const m = uri.match(/\/([^/?]+)(\?|$)/)
    const dbName = m && m[1] ? m[1] : 'my-day-db'

    console.log('Connecting to database:', dbName)
    const client = await MongoClient.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    
    const db = client.db(dbName)
    const boardCol = db.collection('board')
    
    console.log('Clearing all activities...')
    const result = await boardCol.updateMany(
      {},
      { $set: { activities: [] } }
    )
    
    console.log(`✓ Cleared activities from ${result.modifiedCount} board(s)`)
    console.log(`✓ Total boards checked: ${result.matchedCount}`)
    
    await client.close()
    console.log('✓ Done! Database connection closed.')
    process.exit(0)
  } catch (err) {
    console.error('✗ Clear activities failed:', err.message)
    process.exit(1)
  }
}

clearActivities()
