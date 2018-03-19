export function AutoUnsubscribe(production: boolean) {
  return function (constructor) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        if (this[prop] && (typeof this[prop].unsubscribe === 'function')) {
          if (!production) {
            console.log(`${prop} unsubscribed`);
          }
          this[prop].unsubscribe();
        }
        if (this[prop].length > 0) {
          this[prop]
            .filter(el => typeof el['unsubscribe'] === 'function')
            .forEach((el, key) => {
              if (!production) {
                console.log(`${el.constructor.name}[${key}] unsubscribed`);
              }
              el.unsubscribe();
            });
        }
      }
      if (original && typeof original === 'function') {
        original.apply(this, arguments);
      }
    };
  };
}
