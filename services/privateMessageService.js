// privateMessageService.js
const knowledgeSearchService = require("./knowledgeSearchService");

async function handlePrivateMessage(bot, msg) {
  const { from, text } = msg;
  const userId = from.id;

  console.log(`user ${userId} sent this message to private chat: ${text} `);
  const { message_thread_id, chat } = msg;
  const chatId = chat.id;
  
  console.log(`msg thread: ${message_thread_id}`);
  const answer = await knowledgeSearchService.getAnswer(userId, text);
  console.log(`answer: ${answer}`);
  
  if (answer) {
    const options = { };
    if (message_thread_id) {
      options.message_thread_id = message_thread_id;
    }
    try {
      await bot.sendMessage(chatId, answer, options);
    } catch (error) {
      console.error("Error sending message with thread ID:", error.message);
      console.log("Retrying without message_thread_id");
      await bot.sendMessage(chatId, answer);
    } 
  }
  
}

module.exports = { handlePrivateMessage };
