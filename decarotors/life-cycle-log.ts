export function LifeCycleLog(production: boolean) {
  return function(target: any, propKey: string) {

    let propertyValue;
    const LIFE_HOOKS = ['ngOnInit', 'ngOnChanges', 'ngAfterContentInit', 'ngAfterViewInit'];

    function getter() {
      return propertyValue;
    }

    function setter(value: any) {
      propertyValue = value;
      if (!production) {
        const funcCallerName = new Error().stack.split('.')[11].split(' ')[0];
        if (LIFE_HOOKS.indexOf(funcCallerName) !== -1 && this.constructor.prototype[funcCallerName]) {
          console.log(`Component: ${this.constructor.name}, LifeHook: ${funcCallerName}, ${propKey} =`, propertyValue);
        }
      }
    }

    Object.defineProperty(target, propKey, {
      configurable: false,
      get: getter,
      set: setter
    });
  }
}
