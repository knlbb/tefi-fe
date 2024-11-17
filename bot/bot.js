const { Telegraf } = require("telegraf")
const TOKEN = "YOUR TOKEN"
const bot = new Telegraf(TOKEN)

const web_url = "https://stupendous-cranachan-d6b058.netlify.app/"


bot.start((ctx) => 

    ctx.replyWithPhoto(
        {url:'https://v.etsystatic.com/video/upload/q_auto/0100_a4ibnz.jpg'}, 
        // { caption: "cat photo", 
        {reply_markup: {inline_keyboard: [[{text: "Open App", web_app:{url: web_url}}], 
        // [{text: "Submit a Strategy", web_app:{url: web_url}}]
    ]}}
    )
)

bot.launch()