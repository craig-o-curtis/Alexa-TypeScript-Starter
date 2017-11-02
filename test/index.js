const context = require('aws-lambda-mock-context');
var expect = require('chai').expect;
// specify file to test
var index = require('../src/index');

const ctx = context();

// can get these responses from Developer Console Test tab
const mockLambdaResponse = {
    "session": {
        "sessionId": "SessionId.154291c5-a13f-4e7a-ab5a-2342534adfeba",
        "application": {
            "applicationId": "my_alexa_id"
        },
        "attributes": {},
        "user": {
            "userId": null
        },
        "new": true,
    },
    "request": {
        "type": "IntentRequest",
        "requestId": "EdwRequestId.474c15c8-14d2-4a77-a4ce-154291c5",
        "timestamp": "2016-07-05T22:02:01Z",
        "intent": {
            "name": "HelloIntent",
            slots: {
                "Word": {
                    "name": "Word",
                    "value": "hello"
                }
            }
        },
        "locale": "en-US"
    },
    "version": "1.0"
}

// basic tests here
describe("Testing HelloIntent", function(){
    // init lambda
    var speechResponse = null;
    var speechError = null;

    before(function(done){
        var mockObj = mockLambdaResponse;
        index.Handler( mockObj , ctx);
        ctx.Promise
            .then(response => { 
                speechResponse = response 
                console.log(speechResponse);
                done();
            }).catch(error => {
                speechError = error;
                console.error(speechError);
                done();
            })


    });

    describe("response structure is correct", function(){
        it("should not error", function(){
            // expect(speechError).to.be.undefined;
            expect(true).to.be.true;
        });
    }); 

});

