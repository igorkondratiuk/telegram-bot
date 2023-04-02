function algebra(ctx){
    s=ctx.update.message.text.split(' ');
    ansver=0;
    if( ctx.message.text.startsWith('sum'))
        //s=ctx.update.message.text.split(' ');
        ansver=Number(s[1]) + Number(s[2]);

    if( ctx.message.text.startsWith('sub'))
        ansver=Number(s[1]) - Number(s[2]);

    if( ctx.message.text.startsWith('div'))
        ansver=Number(s[1]) / Number(s[2]);

    if( ctx.message.text.startsWith('mul'))
        ansver=Number(s[1]) * Number(s[2]);

    if( ctx.message.text.startsWith('even')){
        if(Number(s[1])%2===0)ansver='Even';
        else ansver='Not Even';
        }
    return ansver;
}

// function base(ctx){
//     if( ctx.message.text.startsWith('/name')) {
//         s = ctx.update.message.text.split(' ');
//         name=s[1];
//         if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={};
//         dataBase[ctx.chat.id].name=name;
//         ctx.reply(`You name is ${name}`);
//     }
//     if( ctx.message.text.startsWith('/age')) {
//         s = ctx.update.message.text.split(' ');
//         age=s[1];
//         if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={};
//         dataBase[ctx.chat.id].age=age;
//         ctx.reply(`You age is ${age}`);
//     }
//     if( ctx.message.text.startsWith('/tel')) {
//         s = ctx.update.message.text.split(' ');
//         tel=s[1];
//         if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={};
//         dataBase[ctx.chat.id].tel=tel;
//         ctx.reply(`You tel is ${tel}`);
//     }
// }

module.exports = {algebra};