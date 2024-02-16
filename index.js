import chokidar from 'chokidar'
import express from 'express'
import { exec } from 'child_process'
import path from 'path'
import fs from 'fs/promises'

const app = express()

const watcher = chokidar.watch('./spooler', { ignored: /^\./, persistent: true })

watcher.on('add', filePath => {
  console.log(`New file detected: ${filePath}`)
  const fullPath = path.resolve(filePath)
  const command = `powershell -Command "& {Start-Process -FilePath "${fullPath}" -Verb Print -PassThru | Out-Null}"`
  exec(command, async (error, stdout, stderr) => {
    if (error) {
      console.error(`Error printing file: ${error.message}`)
      return
    }
    if (stderr) {
      console.error(`Error printing file: ${stderr}`)
      return
    }
    const removeItem = await fs.unlink(fullPath)
    console.log(`File ${filePath} printed successfully. Deleted aswell ${removeItem}`)
  })
})

watcher.on('error', error => {
  console.error('Error watching folder:', error)
})

const PORT = process.env.PORT || 4242
const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

export { server }
