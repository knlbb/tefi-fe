const express = requrie("express")
const cors = require("cors")
const bodyParser = requrie("body-parser")

const {Configuration, OpenAIApi} = require("openai")

const config = new Configuration({
    apiKey:""

})

const openAi = new OpenAIApi(config)

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post("/chat", async (req, res) => {
    const {prompt} = req.body
    const completion = await openAi.createCompletion({
        model: "gpt3.5"
    })
})
