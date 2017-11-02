
Amazon Alexa Starter
* Uses TypeScript, Yarn, Node, Chai & Mocha, AWS Lambda Mock Context
Tutorial from [Youtube: Create An Amazon Alexa Skill Using Node.js And AWS Lambda](https://www.youtube.com/watch?v=E1KCmq_6Gpk)

// How this project was setup
## Project Dependencies
### Install Yarn
```
brew install yarn
```

### Install Alexa SDK
```
yarn add alexa-sdk
```

### Install TypeScript
```
npm install -g typescript
```

### Install DefinitelyTyped (Typings Deprecated)
```
npm install --save-dev @types/alexa-sdk
||
yarn add @types/alexa-sdk --dev
```

### Install Chai & Chai
```
yarn add chai
yarn add mocha
yarn global add mocha
```

### Install AWS Lambda Mock Context
```
yarn add aws-lambda-mock-context
```

### Initialize TypeScript
```
tsc --init // creates tsconfig.json file 
```

### Setup TypeScript Compiler in VS Code
In tsconfig.json
1. add "watch": true,
2. uncomment "sourceMap": true,

Mac `[Command] + [Shift] + P` > Tasks: Configure Task Runner
In .vscode > tasks.json, add the following object to the tasks array:
```
    {
        "taskName": "tsc",
        "type": "shell",
        "command": "tsc",
        "problemMatcher": "$tsc"
    }
```

Test by saving a change in index.ts.
You should see index.js and index.js.map files output in the src directory

## Coding Concepts
index.ts - basic typescript class

## Create Sample Speech Patterns / utterances
utterances.txt - list all possible user phrases

## Testing
Run tests
```
mocha
```
