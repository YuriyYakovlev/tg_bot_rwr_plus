// privateMessageService.js
const knowledgeSearchService = require("./knowledgeSearchService");

async function handlePrivateMessage(bot, msg) {
  const { from, text } = msg;
  const userId = from.id;

  console.log(`from private chat: ${text} `);
  const { chat } = msg;
  const chatId = chat.id;
  
  if(text) {
    const answer = await knowledgeSearchService.getAnswer(userId, text);
    console.log(`answer: ${answer}`);
    if (answer) {
        await bot.sendMessage(chatId, answer);
    }
  }
}

module.exports = { handlePrivateMessage };
