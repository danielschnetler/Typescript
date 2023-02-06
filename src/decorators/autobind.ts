namespace App {
  //autobind decorator
  export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    //target:any methodName:string descriptor: PD..
    // target:any, methodname: string
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
