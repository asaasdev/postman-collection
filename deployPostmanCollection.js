#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const cfg = require(path.resolve(cwd, './config.js'))

console.log(`Iniciando deploy do Postman collection..`)

const { postmanApiKey, collection } = cfg
const collectionJson = JSON.parse(fs.readFileSync(path.resolve(cwd, collection.file)).toString())

collection.raw = JSON.stringify({ collection: collectionJson })

createCollection(collection, postmanApiKey)

function createCollection (collection, postmanApiKey) {
  const https = require('https')

  const options = {
    hostname: 'api.getpostman.com',
    path: `/collections/${collection.uid}`,
    method: 'PUT',
    headers: {
      'X-Api-Key': postmanApiKey
    }
  }

  const req = https.request(options, (res) => {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk)
    })

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks)
      console.log(body.toString())
    })

    res.on("error", function (error) {
      console.error(error)
    })
  })

  req.write(collection.raw)

  req.end()
}
