import express from 'express'
import diagnosesRouter from './src/routes/diagnosesRouter'
import patientsRouter from './src/routes/patientsRouter'

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const PORT = 3001

app.get('/api/ping', (_req, res) => {
    res.send('Pong')
})
app.use('/api/diagnoses', diagnosesRouter)
app.use('/api/patients', patientsRouter)

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})