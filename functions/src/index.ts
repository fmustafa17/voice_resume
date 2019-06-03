import * as functions from 'firebase-functions';
import { dialogflow, Suggestions, SimpleResponse, } from 'actions-on-google';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

//Google Assistant

// export const farhanaResume = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = dialogflow({debug:true});

app.intent('Contact', (conv) => {
    conv.ask('');
});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask(new SimpleResponse('Thanks for checking out Farhana\'s voice resume. Ask questions to get to know me more such as where did I go for college, my projects and how to contact me.'));
    conv.ask(new Suggestions('Introduction','Objective', 'Education','Contact'));
});

app.intent('Education', (conv) => {
    conv.ask('I graduated in May 2018 with a bachelor\'s degree in computer science from Syracuse University. Go Orange!');
});

app.intent('Exit', (conv) => {
    conv.ask('Thanks for getting to know me. Goodbye!');
});

app.intent('Experience', (conv) => {
    conv.ask('');
});

app.intent('Interests', (conv) => {
    conv.ask('');
});

app.intent('Introduction', (conv) => {
    conv.ask('I am a software developer from the Bronx, New York. ');
});

app.intent('Objective', (conv) => {
    conv.ask('I am looking for new development opportunities in New York City in order to make creative solutions while staying close to family.');
});

app.intent('Projects', (conv) => {
    conv.ask('');
    //Carousel Cards with github repo links
});

app.intent('Strengths', (conv) => {
    conv.ask('I\'m a quick learner and a go getter. I stay on top of new technologies and learn what works and what doesn\'t. ');
});

app.intent('Weaknesses', (conv) => {
    conv.ask('Sometimes, I\'m not courageous. I get very anxious if I need to present or even have to talk outloud in front of some people. I practice and I take a few, deep breathes and then my confidence flows out.');
});

export const dialogflowFirebaseFulfillment = functions.https.onRequest(app);

//Alexa