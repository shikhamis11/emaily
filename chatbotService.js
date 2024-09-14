const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
// 1 - Train the IA
async function trainChatBotIA() {
    return new Promise(async (resolve, reject) => {
        // Adds the utterances and intents for the NLP
        // // Train also the NLG
        // Adds the utterances and intents for the NLP
        // manager.addDocument('en', 'goodbye for now', 'greetings.bye');
        // manager.addDocument('en', 'bye bye take care', 'greetings.bye');
        // manager.addDocument('en', 'okay see you later', 'greetings.bye');
        // manager.addDocument('en', 'bye for now', 'greetings.bye');
        // manager.addDocument('en', 'i must go', 'greetings.bye');
        // manager.addDocument('en', 'hello', 'greetings.hello');
        // manager.addDocument('en', 'hi', 'greetings.hello');
        // manager.addDocument('en', 'howdy', 'greetings.hello');
        // manager.addDocument('en', 'how are you?', 'greetings.hello');
// Train also the NLG
        // manager.addAnswer('en', 'greetings.bye', 'Till next time');
        // manager.addAnswer('en', 'greetings.bye', 'see you soon!');
        // manager.addAnswer('en', 'greetings.hello', 'Hey there!');
        // manager.addAnswer('en', 'greetings.hello', 'Greetings!');


        // Train the chatbot with different phrases
        manager.addDocument('en', 'hello', 'greet.hello');
        manager.addDocument('en', 'hi', 'greet.hello');
        manager.addDocument('en', 'hey', 'greet.hello');

        manager.addDocument('en', 'bye', 'greet.bye');
        manager.addDocument('en', 'goodbye', 'greet.bye');

        manager.addDocument('en', 'what is your name?', 'bot.Shikha');
        manager.addDocument('en', 'who are you?', 'bot.name');

        manager.addDocument('en', 'how are you?', 'greet.howareyou');
        manager.addDocument('en', 'what does this side do?', 'greet.about');
        manager.addDocument('en', 'goodbye for now', 'greet.bye');
        manager.addDocument('en', 'bye bye take care', 'greet.bye');
        manager.addDocument('en', 'okay see you later', 'greet.bye');
        manager.addDocument('en', 'bye for now', 'greet.bye');
        manager.addDocument('en', 'i must go', 'greet.bye');

        // Train the chatbot with some responses
        manager.addAnswer('en', 'greet.hello', 'Hello! How can I assist you?');
        manager.addAnswer('en', 'greet.bye', 'Goodbye! Have a great day!');
        manager.addAnswer('en', 'bot.name', 'I am your chatbot!');
        manager.addAnswer('en', 'bot.Shikha', 'My name is Shikha!');
        manager.addAnswer('en', 'greet.howareyou', 'I am good, thanks for asking!');
        manager.addAnswer('en', 'greet.about', 'I am a chatbot that can help you with your queries!');
        manager.addAnswer('en', 'greet.bye', 'see you soon!');

        await manager.train();
        manager.save();
        console.log("AI has been trainded")
        resolve(true);
    })
}
async function generateResponseAI(qsm) {
    // Train and save the mode
    return new Promise(async (resolve, reject) => {
        console.log(resolve);
        response = await manager.process('en', qsm);
        resolve(response);
    })
}
const connectWebSocket = (io) => {
    io.on('connection', function (socket) {
        socket.on('join', (userId) => {
            socket.join(userId);
            console.log("New user joined!")
        });
socket.on('new-msg', async function (data) {
            let response = await generateResponseAI(data.msg);
            io.to(data.room).emit('send-msg-response', response.answer !== undefined
                ? response.answer : "I am sorry, I don't understand :( ");
        })
});
}
module.exports = {
    connectWebSocket,
    trainChatBotIA
}