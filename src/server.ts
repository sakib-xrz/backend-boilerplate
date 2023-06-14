import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function databaseConnection() {
  try {
    await mongoose.connect(config.database_uri as string)
    console.log('Database connected successfully')

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Error while connecting database: ', error)
  }
}

databaseConnection()
