// knowledgeSearchService.js
const { SessionsClient } = require("@google-cloud/dialogflow-cx");

async function getAnswer(userId, msg) {
  const sessionId = userId || Math.random().toString(36).substring(7);

  const client = new SessionsClient();
  const sessionPath = client.projectLocationAgentSessionPath(
      process.env.GOOGLE_PROJECT_ID,
      process.env.GOOGLE_PROJECT_LOCATION,
      process.env.GOOGLE_AGENT_ID,
      sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: { text: msg },
      languageCode: process.env.GOOGLE_AGENT_LANGUAGE,
    },
  };

  try {
    const [response] = await client.detectIntent(request);
    
    const answer = response.queryResult.responseMessages[0].text.text[0];
    console.log(`Response: ${answer}`);
    
    return answer;
  } catch (error) {
    console.error('Error during Dialogflow process:', error);
    throw new Error(`Dialogflow request failed: ${error.message}`);
  }
}

module.exports = {
  getAnswer,
};
