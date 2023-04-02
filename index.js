const { Telegraf } = require('telegraf');
const {algebra} = require('./handers.js');

require('dotenv').config()
//console.log('\n',process.env.SECRET_KEY,'\n',process.env.SECRET_PASS,'\n',process.env.S3_BUCKET,'\n')


const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: process.env.DB_DIALECT
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const dataBase={};

bot.start((ctx) => ctx.reply('Welcome!!!'));
bot.help((ctx) => ctx.reply('Send me a sticker...'));
bot.on('sticker', (ctx) => ctx.reply('👍'));


bot.on('text',
    (ctx) => {

        if (ctx.message.text.startsWith('/name')) {
            s = ctx.update.message.text.split(' ');
            name = s[1];
            if (!dataBase[ctx.chat.id]) dataBase[ctx.chat.id] = {};
            dataBase[ctx.chat.id].name = name;
            ctx.reply(`You name is ${name}`);
        }
        if (ctx.message.text.startsWith('/age')) {
            s = ctx.update.message.text.split(' ');
            age = s[1];
            if (!dataBase[ctx.chat.id]) dataBase[ctx.chat.id] = {};
            dataBase[ctx.chat.id].age = age;
            ctx.reply(`You age is ${age}`);
        }
        if (ctx.message.text.startsWith('/tel')) {
            s = ctx.update.message.text.split(' ');
            tel = s[1];
            if (!dataBase[ctx.chat.id]) dataBase[ctx.chat.id] = {};
            dataBase[ctx.chat.id].tel = tel;
            ctx.reply(`You telephone is ${tel}`);
        }
        if (ctx.message.text.startsWith('/all')) {
            s = ctx.update.message.text.split(' ');
            //tel = s[1];
            if (!dataBase[ctx.chat.id]) dataBase[ctx.chat.id] = {};
            //dataBase[ctx.chat.id].tel = tel;
            ctx.reply(`You information is: 
            name - ${dataBase[ctx.chat.id].name} 
            age - ${dataBase[ctx.chat.id].age}
            telephone - ${dataBase[ctx.chat.id].tel}
            `);
        }

        if (algebra(ctx)) ctx.reply(algebra(ctx));

    });


bot.launch().then(()=> console.log('bot started'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));