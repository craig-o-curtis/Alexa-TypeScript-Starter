import * as Alexa from "alexa-sdk";

let handlers: Alexa.Handlers<any> = {
    "AboutIntent" : () => {
        let self: Alexa.Handler = this;
        let speechOutput = "This skill was made, written, and coded by Craig O. Curtis, first of his name";
         // leaves record of this in Amazon Alexa mobile app
            // :tell for no record 
        self.emit(":tellWithCard", speechOutput, "Craig's Skill", speechOutput)
    },
    "HelloIntent" : () => {
        let self: Alexa.Handler = this;
        // grab passed-in param
        let intentRequest = <Alexa.IntentRequest>self.event.request;
        let value = intentRequest.intent.slots.Word.value;
        let speechOutput = '';

        value = value.toLowercase();
        switch(value) {
            case 'hi':
            case 'yo':
            case 'hello':
                speechOutput = "The translation is 你好";
                break;
            default:
                "I'm sorry, I do not now that word"
                break;
        }
        self.emit(":tellWithCard", speechOutput, "Craig's Skill", speechOutput)
    }
}

// handler for Lambda
export class Handler {
    constructor(
        event: Alexa.RequestBody<any>, 
        context: Alexa.Context, 
        callback: Function
    ) {
        let alexa = Alexa.handler(event, context);
        // automatically assigned by Amazon when creating new project
        alexa.appId = 'my_alexa_id';
        // handlers are series of Intents
            // one intent per feature 
        alexa.registerHandlers(handlers);
        // bootstrapping of Alexa app
        alexa.execute();
    }


}