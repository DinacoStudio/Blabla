const Command = require('../structure/command.js');
const Discord = require('discord.js');
const puppeteer = require('puppeteer')


module.exports = new Command({
    name: "balabola",
    description: "Забалаболить",
    slashCommandOptions: [
        {
            name: "text",
            description: "Enter text",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "number",
            description: "Enter num",
            type: Discord.ApplicationCommandOptionType.Number,
            required: true
        }
    ],
    permissions: "SEND_MESSAGES",
    async execute(client, args, interaction) {
        let text = args.getString("text")
        let num = args.getNumber("number")
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://yandex.ru/lab/api/yalm/text3');
        const textContent = await page.evaluate(test(text,num));
        console.log(textContent)
        await interaction.reply({ content: textContent.query + textContent.text })

        await browser.close();

    }
});


function test(h = "", j = 0) {
    return `fetch("https://yandex.ru/lab/api/yalm/text3",{headers:{accept:"*/*","accept-language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/json","device-memory":"8",downlink:"4.9",dpr:"0.9",ect:"4g",rtt:"100","sec-ch-ua":'"Chromium";v="108", "Opera";v="94", "Not)A;Brand";v="99"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","sec-gpc":"1","viewport-width":"1192","x-requested-with":"XMLHttpRequest","x-retpath-y":"https://yandex.ru/lab/yalm?style=0&input=%D0%BF%D0%B8%D0%B7%D0%B4%D0%B0&skipCurtain=1"},referrer:"https://yandex.ru/lab/yalm?style=0",referrerPolicy:"strict-origin-when-cross-origin",body:'{"query":"${h}","intro":${j},"filter":1}',method:"POST",mode:"cors",credentials:"include"}).then(e=>e.json()).then(e=>e);`
}