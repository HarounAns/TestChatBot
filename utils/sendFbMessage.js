const request = require('request');
const FACEBOOK_ACCESS_TOKEN = 'EAAcJTJf6agEBALG7q1CuhmNWutQ4FfJbmRhpLxs64CLfEN8PnOr4SSwPlefvblaUuYUQOEoNNuUOTFU1lCWc79LK8JyahlStBt32IGPEW4VMa79i1c8C0E8cQjRapQ5TD1hlLfWn26SOfAS9GwXaUMGZBp68ZBJpXIooyaZBAXMljKeDarU';

module.exports = (json) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN },
        method: 'POST',
        json: json,
    });
};