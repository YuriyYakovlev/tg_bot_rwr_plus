# RWR Plus Bot

This Telegram bot provides detailed, accurate responses to questions about obtaining the Red-White-Red (RWR) Plus residence permit, based on official documentation and resources. It uses advanced natural language processing to deliver informative and contextually relevant answers.

## Introduction
This bot was developed to streamline information access for individuals interested in the RWR Plus residence permit. By leveraging AI and natural language models, it can answer common questions and provide guidance based on a dataset built from unstructured data sources, including official manuals and documents. The project is open source, allowing for community contributions and improvements.

## Description
The RWR Plus Residence Permit Bot is designed to:
- Answer questions related to the application, eligibility, and requirements for the RWR Plus residence permit.
- Provide guidance based on verified resources to ensure reliable, up-to-date information.
- Help users navigate complex residency processes directly within Telegram, creating a user-friendly experience.
  
The bot uses machine learning models and AI-driven natural language understanding, combining Dialogflow CX with the Gemini model to process and generate responses accurately. This is achieved through an unstructured dataset derived from official resources.

## Features
- **Intelligent Q&A**: Uses Dialogflow CX and Gemini to understand and respond to natural language questions about the RWR Plus permit.
- **Dataset Based on Official Documentation**: Built from structured and unstructured sources, focusing on accurate, relevant information.
- **Telegram Integration**: Simple, direct access through Telegram for convenient communication.
  
## Technologies
The bot is built with the following technologies:

- **Node.js**: For server-side scripting and handling bot functionality.
- **Dialogflow CX**: Enables natural language understanding and conversational flows.
- **Gemini Model**: Provides advanced natural language processing capabilities.
- **Unstructured Data Processing**: Uses official resources to build a comprehensive dataset for reliable responses.
- **Telegram Bot API**: Integrates directly with Telegram for seamless interaction.
- **Docker**: Ensures easy deployment and containerized environment setup.

## Getting Started
This bot is open-source and contributions are welcome! To get started with development:

1. **Fork** the repository to your GitHub account.
2. **Clone** your fork to your local environment.
3. **Create a branch** for each new feature or fix.
4. **Develop** your changes with meaningful commit messages.
5. **Submit a pull request** for review and potential inclusion in the main repository.

## Installation
To set up the bot locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up environment variables for:
   - `GOOGLE_PROJECT_ID`
   - `GOOGLE_PROJECT_LOCATION`
   - `GOOGLE_AGENT_ID`
   - `GOOGLE_AGENT_LANGUAGE`
   - `BOT_TOKEN` (Telegram bot token)
4. Start the bot using Docker or directly with Node.js:
   - Docker: `docker-compose up`
   - Node.js: `node index.js`

## License
This project is distributed under an open-source license, allowing free use, modification, and distribution. Contributions are encouraged to help improve the bot and expand its capabilities.
