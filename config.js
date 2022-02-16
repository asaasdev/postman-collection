if (!process.env.API_KEY) require('dotenv').config()

const apiKey = process.env.API_KEY

module.exports = {
  "postmanApiKey": apiKey,
  "collection":{
    "file":"asaasPostmanCollection.json",
    "uid":"18837025-34183c23-2b1e-4cf1-a3c5-db62dae4dd69"
  }
}
