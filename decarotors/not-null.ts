export function NotNull(target: any, propKey: string) {
  let propValue;

  function setter(value) {
    if (!value) {
      throw new Error(`Property ${propKey} can't be null`);
    }

    propValue = value;
  }

  Object.defineProperty(target, propKey, {
    get: () => propValue,
    set: setter
  });
}
