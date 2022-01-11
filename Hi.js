Bot.command('start',async ctx => {
 
     
      var q1 =  ['MVA21', 'MVA22', 'IVV22'];
      var q2 = q1[Math.floor(Math.random()*q1.length)]; 
      var q3 = q2
      await Storage.set(ctx.from.id,q3);

      
  let hi = `https://api.codebazan.ir/captcha/?font=9&bg=9&text=${q3}&textcolor=1`

ctx.api.sendPhoto(ctx.from.id,hi, {
    caption: "slove this if u are a human"
  
  
 
})  
 ctx.question('text')

});
Bot.on('answer', 'text', async ctx => {
let ans 
= await Storage.get(ctx.from.id);

  if(ctx.message.text == ans){
ctx.reply('passed')
}else{
ctx.reply('wromg')
}
}
