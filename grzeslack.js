var Botkit = require('botkit');

console.log('grzeslack script');
var controller = Botkit.slackbot({
	debug: true
});

controller.spawn({
	token: "xoxb-145666055028-7pM6t0jCP0ZS6GzLoYVBtGSV",
}).startRTM();

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
	bot.reply(message, 'Hello Grzeslack');	
});