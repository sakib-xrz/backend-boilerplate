import dotenv from 'dotenv'
import path from 'path'

/* The root directory of the project. process.cwd() means the root directory*/
dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  env: process.env.ENV,
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
}
