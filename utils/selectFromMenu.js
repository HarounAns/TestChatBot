const sendFbMessage = require('./sendFbMessage');
const getQuickReplies = (item) => {
    console.log('item');
    console.log(item);
    let replies = [];
    const keys = Object.keys(item);
    for (let key of keys) {
        let reply = {};
        reply.content_type = "text";
        reply.title = item[key].name;
        reply.payload = item[key].name;
        replies.push(reply);
    };
    console.log('replies');
    console.log(replies);
    return replies;
};

module.exports = (choice, json) => {
    if (!choice) {
        console.error('Not A Valid Choice');
        json.message.text = 'Error 1000: Item Does Not Exist';
        sendFbMessage(json);
        return;
    }

    if (!choice.items) {
        console.error('Items Does Not Exist');
        json.message.text = 'Error 1001: Item Does Not Exist';
        sendFbMessage(json);
        return;
    }

    if (!json) {
        console.error('JSON Object Does Not Exist');
        return;
    }

    // If this is not a final item with a price
    if (!choice.items.price) {
        json.message.text = choice.prompt;
        json.message.quick_replies = getQuickReplies(choice.items);
        sendFbMessage(json); 
    }
}