// queryRefinementService.js
const vertexAi = require("@google-cloud/vertexai");

let vertexAiClient = new vertexAi.VertexAI({
  project: process.env.GOOGLE_PROJECT_ID,
  location: process.env.GOOGLE_PROJECT_LOCATION,
});


async function refineQuery(text) {
  try {
    const request = prepareRefinementRequest(text.substring(0, 300));
    const generativeModel = vertexAiClient.preview.getGenerativeModel({
      model: process.env.GOOGLE_AI_MODEL,
      generation_config: {
        max_output_tokens: 1000,
        temperature: 0,
        top_p: 1,
      },
    });
    
    const classificationResponse = await generativeModel.generateContentStream(request);
    let response = (await classificationResponse.response).candidates[0];

    return response.content.parts[0].text;
  } catch (error) {
    console.error("Error in refineQuery:", error);
    return null;
  }
}


function prepareRefinementRequest(question) {
  return {
    contents: [{
      role: "user",
      parts: [{
        text: `
          Інструкція: Відповідно до запитання користувача нижче, видали зайві слова, перефразуй незрозумілі терміни та сформулюй питання. 
          Використовуй ці терміни замість синонімів:
              'картка RWR Plus' - замість: RWR+, РВР плюс карта, ВНЖ
              'самозайнята особа' - замість: ФОП, предприниматель, selbstandiger
          Запитання користувача: '${question}'
          Згенеруй тільки фінальне питання.`
      }]
    }]
  };
}

module.exports = {
  refineQuery
};

