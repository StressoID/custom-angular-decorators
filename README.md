# custom-angular-decorators
Decorators for Angular, which will make life easier for you

# install
`npm install --save custom-angular-decorators`
   
And add the `include` line `"node_modules/custom-angular-decorators/**/index.ts"` in `tsconfig.json` file

# decorators

## AutoUnsubscribe(production: boolean)
Decorator for auto unsubscribed your Subscription property and array with Subscription elements.
## LifeCycleLog(production: boolean)
Logger for your component property on LifeCycle Hooks.  