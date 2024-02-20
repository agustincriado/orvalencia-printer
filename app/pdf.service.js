import PDFDocument from 'pdfkit'
import fs from 'fs'

const logoProps = {
  width: 200,
  height: 100
}
const getUnixDate = () => Math.floor(new Date().getTime() / 1000)
const printAlta = async (params) => {
  const pdfFileStream = fs.createWriteStream('./spooler/File-' + getUnixDate() + '.pdf')
  const document = new PDFDocument({ autoFirstPage: true })
  document.pipe(pdfFileStream)
  document.image('./app/images/logo.jpg', 0, 0, logoProps)
  document.moveDown()
  document.text('Hey!')
  document.end()
  await new Promise((resolve, reject) => {
    pdfFileStream.on('finish', resolve)
    pdfFileStream.on('error', reject)
  })
}
const printBaja = async (params) => {
  const pdfFileStream = fs.createWriteStream('./spooler/File-' + getUnixDate() + '.pdf')
  const document = new PDFDocument({ autoFirstPage: true })
  document.pipe(pdfFileStream)
  document.image('./app/images/logo.jpg', 0, 0, logoProps)
  document.moveDown()
  document.text('Hey!')
  document.end()
  await new Promise((resolve, reject) => {
    pdfFileStream.on('finish', resolve)
    pdfFileStream.on('error', reject)
  })
}
const printVencimiento = async (params) => {
  const pdfFileStream = fs.createWriteStream('./spooler/File-' + getUnixDate() + '.pdf')
  const document = new PDFDocument({ autoFirstPage: true })
  document.pipe(pdfFileStream)
  document.image('./app/images/logo.jpg', 0, 0, logoProps)
  document.moveDown()
  document.text('Hey!')
  document.end()
  await new Promise((resolve, reject) => {
    pdfFileStream.on('finish', resolve)
    pdfFileStream.on('error', reject)
  })
}
const printConcesion = async (params) => {
  const pdfFileStream = fs.createWriteStream('./spooler/File-' + getUnixDate() + '.pdf')
  const document = new PDFDocument({ autoFirstPage: true })
  document.pipe(pdfFileStream)
  document.image('./app/images/logo.jpg', 0, 0, logoProps)
  document.moveDown()
  document.text('Hey!')
  document.end()
  await new Promise((resolve, reject) => {
    pdfFileStream.on('finish', resolve)
    pdfFileStream.on('error', reject)
  })
}
printAlta()
export { printAlta, printBaja, printVencimiento, printConcesion }
