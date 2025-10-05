import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { createClient } from './redis.js'
import { router as apiRouter } from './routes.js'

const app = express()

const origins = process.env.CORS_ORIGINS?.split(',').map(s => s.trim()).filter(Boolean)
app.use(cors({ origin: origins?.length ? origins : true }))
app.use(express.json({ limit: '256kb' }))

app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() })
})

app.use('/api', apiRouter)

const port = Number(process.env.PORT || 4000)

const start = async () => {
  try {
    await createClient()
    app.listen(port, () => {
      console.log(`SecureShare server listening on http://localhost:${port}`)
    })
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
