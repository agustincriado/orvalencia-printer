import { Router } from 'express'

const PrintRouter = Router()

PrintRouter.post('/alta', async (req, res) => {
  try {
    const result = ''
    res.status(200).json({ status: 'Success', message: result })
  } catch (error) {
    res.status(400).json({ status: 'Error', message: error.message })
  }
})
PrintRouter.post('/baja', async (req, res) => {
  try {
    const result = ''
    res.status(200).json({ status: 'Success', message: result })
  } catch (error) {
    res.status(400).json({ status: 'Error', message: error.message })
  }
})
PrintRouter.post('/vencimiento', async (req, res) => {
  try {
    const result = ''
    res.status(200).json({ status: 'Success', message: result })
  } catch (error) {
    res.status(400).json({ status: 'Error', message: error.message })
  }
})
PrintRouter.post('/concesion', async (req, res) => {
  try {
    const result = ''
    res.status(200).json({ status: 'Success', message: result })
  } catch (error) {
    res.status(400).json({ status: 'Error', message: error.message })
  }
})

export default PrintRouter
