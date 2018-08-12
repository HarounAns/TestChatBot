// import { read } from 'fs';

const API_AI_TOKEN = '62650150ab4442bcad99a53b5c2800b6';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const request = require('request');
const menu = require('../utils/menu');
const sendFbMessage = require('../utils/sendFbMessage');
const selectFromMenu = require('../utils/selectFromMenu');
const processPayment = require('../utils/processPayment');

console.log('hitting process message');

// Global Variable Used to indicate that customer wants item.
let wantedItem;

const processMessage = (senderId, text) => {
    let msg;
    let useNLU = false;
    let quickReplies = [];
    let json = {
        recipient: { id: senderId },
        message: { text: '' },
    }
    let context;

    // switch all to lowercase
    text = text.toLowerCase();

    if (text === 'order') {
        selectFromMenu(menu, json);
        return;
    }

    if (menu.fullList.hasOwnProperty(text)) {
        // do a select from menu on the object
        const item = getObject(menu, "name", text);
        console.log('item\n')
        console.log(JSON.stringify(item, '', 2));
        return;
    }

    //     // switch statement for different responses
    //     // Rolled Ice Cream amd Crepes is commented out for Beta Version
    //     switch (text) {
    //         case "order":
    //             json.message.text = 'Hi! I\'m your Barista Bot! What would you like to order?';
    //             // quickReplies = ['Coffee', 'Teas + Chai', 'Crepes', 'Rolled Ice Cream', 'other drinks', 'other desserts'];
    //             quickReplies = ['Coffee', 'Teas + Chai', 'other drinks', 'other desserts'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "yes":
    //             if (!wantedItem) {
    //                 useNLU = true;
    //             }
    //             else {
    //                 processPayment(wantedItem);
    //                 json.message.text = 'Processing Payment...';
    //             }
    //             break;

    //         case "no":
    //             if (!wantedItem) {
    //                 useNLU = true;
    //             }
    //             else {
    //                 delete wantedItem;
    //                 json.message.text = 'Oh okay, then what would you like to order?';
    //                 // quickReplies = ['Coffee', 'Teas + Chai', 'Crepes', 'Rolled Ice Cream', 'other drinks', 'other desserts'];
    //                 quickReplies = ['Coffee', 'Teas + Chai', 'other drinks', 'other desserts'];
    //                 json.message.quick_replies = getQuickReplies(quickReplies);
    //                 break;
    //             }
    //             break;

    //         case "coffee":
    //             json.message.text = "We have many different varieties of coffee. What kind would you like?"
    //             quickReplies = ['On the Spot Roast', 'Espresso Shot', 'Macchiato', 'Cappucino', 'Lattes'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "lattes":
    //             json.message.text = "We have an original latte. As well as a Mocha and a Honey Latte. Which would you like?"
    //             quickReplies = ['Original', 'Mocha', 'Honey'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             context = 'lattes';
    //             break;

    //         case "original":
    //             if (context === 'lattes') {
    //                 json.message.text = "Would you like your latte hot or iced?"
    //                 quickReplies = ['Hot', 'Iced'];
    //                 json.message.quick_replies = getQuickReplies(quickReplies);
    //                 wantedItem = menu.items.coffee.items.lattes.latte;
    //                 context = 'original latte';
    //             }
    //             else {
    //                 json.message.text = "What did you mean by original? Did you mean any of the following?";
    //                 quickReplies = ['Original Latte', 'No'];
    //                 json.message.quick_replies = getQuickReplies(quickReplies);
    //                 wantedItem = menu.items.coffee.items.lattes.latte;
    //                 delete context;
    //             }
    //             break;

    //         case "original latte":
    //             json.message.text = "Would you like your latte hot or iced?"
    //             quickReplies = ['Hot', 'Iced'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             wantedItem = menu.items.coffee.items.lattes.latte;
    //             context = 'original latte';
    //             break;

    //         case "honey":
    //             if (context === 'lattes') {
    //                 json.message.text = "A Honey Latte? Awesome, that will cost $" + menu.items.lattes.honeyLatte.price + ". Is that alright?"
    //                 quickReplies = ['Yes', 'No'];
    //                 json.message.quick_replies = getQuickReplies(quickReplies);
    //                 wantedItem = menu.items.coffee.items.lattes.honeyLatte;
    //             }
    //             else {
    //                 json.message.text = "What did you mean by honey? Did you mean any of the following?";
    //                 quickReplies = ['Honey Latte', 'No'];
    //                 json.message.quick_replies = getQuickReplies(quickReplies);
    //                 wantedItem = menu.items.coffee.items.lattes.honeyLatte;                
    //             }
    //             context = null;
    //             break;

    //         case "honey latte":
    //             json.message.text = "A Honey Latte? Awesome, that will cost $" + menu.items.lattes.honeyLatte.price + ". Is that alright?"
    //             quickReplies = ['Yes', 'No'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             wantedItem = menu.items.coffee.items.lattes.honeyLatte;
    //             break;

    //         // case "crepes":
    //         //     json.message.text = "A crepe? Sure! What kind of crepe were you thinking?";
    //         //     quickReplies = ['nutella', 'strawberry', 'oreo crepe'];
    //         //     json.message.quick_replies = getQuickReplies(quickReplies);
    //         //     break;

    //         // case "rolled ice cream":
    //         //     json.message.text = "Rolled Ice Cream?? Thats my favorite! What flavor ice cream?";
    //         //     quickReplies = ['chocolate', 'vanilla', 'oreo ice cream'];
    //         //     json.message.quick_replies = getQuickReplies(quickReplies);
    //         //     break;

    //         case "other drinks":
    //             json.message.text = "Sure thing! We have a variety of other drinks besides coffee and teas. What would you like?";
    //             quickReplies = ['juices', 'Belgian hot cocoa', 'sugar-cane sodas', 'Life-Water'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "juices":
    //             json.message.text = "Our fresh juices come in three flavors. Which would you prefer?";
    //             quickReplies = ['Mango', 'Strawberry Banana', 'Pomegranate Blood Orange'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "belgian hot cocoa":
    //             json.message.text = "We have two flavors. Toasted Marshmallow and White Chocolate.";
    //             quickReplies = ['Toasted Marshmallow', 'White Chocolate'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "sugar-cane sodas":
    //             json.message.text = "All of our sodas are made with real sugar cane";
    //             quickReplies = ['Mango', 'Strawberry Banana', 'Pomegranate Blood Orange'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "life-water":
    //             json.message.text = "Our fresh juices come in three flavors. Which would you prefer?";
    //             quickReplies = ['Mango', 'Strawberry Banana', 'Pomegranate Blood Orange'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         case "other desserts":
    //             json.message.text = "Our desserts, also known as our \"Fine Eats\", are splendid. What would you like?";
    //             quickReplies = ['Macaroons', 'Tiramisu', 'Chocolate Mousse', 'Copa Three Chocolate', 'Crème brûlée + Italian Berries'];
    //             json.message.quick_replies = getQuickReplies(quickReplies);
    //             break;

    //         default:
    //             // defaults to NLU from API AI
    //             useNLU = true;
    //     }

    //     if (useNLU) {
    //         // uses Dialogflow in order to handle small talk
    //         const apiaiSession = apiAiClient.textRequest(text, { sessionId: 'crowdbotics_bot' });
    //         apiaiSession.on('response', (response) => {
    //             json.message.text = response.result.fulfillment.speech;
    //             sendTextMessage(json);
    //         });
    //         apiaiSession.on('error', error => console.log(error));
    //         apiaiSession.end();
    //     } else {
    //         sendTextMessage(json);
    //     }
}



module.exports = (event) => {
    const senderId = event.sender.id;
    const message = event.message.text;
    processMessage(senderId, message);
};

const getObject = (theObject, key, value) => {
    var result = null;
    if (theObject instanceof Array) {
        for (var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i], key, value);
            if (result) {
                break;
            }
        }
    }
    else {
        console.log('hit spot 0');
        for (var prop in theObject) {
            console.log('test ' + prop + ' and ' + key); 
            if (prop == key) {
                console.log('hit spot 1')
                console.log('prop');
                console.log(prop);
                console.log('value');
                console.log(value);
                if (theObject[prop].toLowerCase() == value) {
                    console.log('hit spot 2')

                    return theObject;
                }
            }
            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = getObject(theObject[prop], key, value);
                if (result) {
                    break;
                }
            }
        }
    }
    return result;
}