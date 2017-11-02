"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("alexa-sdk");
var handlers = {
    "AboutIntent": function () {
        var self = _this;
        var speechOutput = "This skill was made, written, and coded by Craig O. Curtis, first of his name";
        // leaves record of this in Amazon Alexa mobile app
        // :tell for no record 
        self.emit(":tellWithCard", speechOutput, "Craig's Skill", speechOutput);
    },
    "HelloIntent": function () {
        var self = _this;
        // grab passed-in param
        var intentRequest = self.event.request;
        var value = intentRequest.intent.slots.Word.value;
        var speechOutput = '';
        value = value.toLowercase();
        switch (value) {
            case 'hi':
            case 'yo':
            case 'hello':
                speechOutput = "The translation is 你好";
                break;
            default:
                "I'm sorry, I do not now that word";
                break;
        }
        self.emit(":tellWithCard", speechOutput, "Craig's Skill", speechOutput);
    }
};
// handler for Lambda
var Handler = /** @class */ (function () {
    function Handler(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        // automatically assigned by Amazon when creating new project
        alexa.appId = 'my_alexa_id';
        // handlers are series of Intents
        // one intent per feature 
        alexa.registerHandlers(handlers);
        // bootstrapping of Alexa app
        alexa.execute();
    }
    return Handler;
}());
exports.Handler = Handler;
//# sourceMappingURL=index.js.map