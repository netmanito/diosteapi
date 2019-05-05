var client = require('./connection.js');
var argv = require('yargs').argv;
var functions = require('./functions.js');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var apiKey = process.env.apiKey;
const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = "-21301224";
  var Culo = "culo";
  if (msg.text.toString().toLowerCase().indexOf(Culo) === 0) {
  bot.sendMessage(chatId, "<ICEFIRE> ole mi culo... cooomo mi culo... no hay nunguno :) <-- seguro que alguno quiere probarlo ;)");
  } 
      
  });

bot.onText(/^\/chatid/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "El id de este chat es: " + chatId);  
});

// Matches "/echo [whatever]"
bot.onText(/^\/rquote/, function(msg) {
    bot.sendMessage(msg.chat.id,functions.rquote());
});

/* if (argv.search) {
  var quoteLookup=argv.search;
  console.log("Search term: "+quoteLookup);
  results(quoteLookup);
} */

// function search word in quote
/*
if (argv.quote) {
  functions.quote(argv.quote, function(quote) {
      console.log(results);
  });
} 

// function search quote by author
if (argv.aquote) {
  functions.aquote(argv.aquote, function(aquote) {
    console.log(aquote);
 });
}

// function search quote by id
if (argv.iquote) {
  functions.iquote(argv.iquote, function(iquote) {
    console.log(iquote);
 });
}

// function random quote
/* if (argv.rquote) {
  functions.rquote(function(rquote) {
     console.log(rquote);
  });
} */

/*

// function addquote 
if (argv.addquote) {
  functions.addquote(argv.addquote, function(addquote) {
    console.log(addquote);
 });
}

// function delquote 
if (argv.delquote) {
  functions.delquote(argv.delquote, function(delquote) {
    console.log(delquote);
 });
}
*/

// ADD THESE TWO LINES
//app.use('/rquote', results);
module.exports = bot;
