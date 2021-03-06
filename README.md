# custom-angular-decorators
Decorators for Angular, which will make life easier for you

# install
`npm install --save custom-angular-decorators`
   
And add the `include` line `"node_modules/custom-angular-decorators/**/index.ts"` in `tsconfig.json` file

# RoadMap

 | Decorators      | Status      |    
 | -------------   | -----------:|
 | AutoUnsubscribe | Testing     |
 | LifeCycleLog    | Testing     |
 | NotNull         | Testing     |
 | DisableField    | Not started |
 | Phone           | Not started |


# Decorators

## Class decorator
### AutoUnsubscribe(production: boolean)
Decorator for auto unsubscribed your Subscription property and array with Subscription elements.
```
@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss'],
})
@AutoUnsubscribe(environment.production)
export class AppComponent { }
```  


## Property decorator
### LifeCycleLog(production: boolean)
Logger for your component property on LifeCycle Hooks.  

```
export class AppComponent implements OnInit {
    @LifeCycleLog(environment.production)
    public property;
    
    ngOnInit() {
        this.property = 10;
    }
}
```

### NotNull()
Check null property in model and generate exception.

```
class Model {
  @NotNull
  public field;

  constructor(field) {
    this.field = field;
  }
}
```