console.log("from const Holder");

export const myMessenger: any = {
    observers: [],

    subscribe: (f:Function) => {
        myMessenger.observers.push(f);
    },
    unsubscribe: (f:Function) => {
        myMessenger.observers = myMessenger.observers.filter((subscriber: Function) => subscriber !== f);
    },
    notify: (data: any) => {
        myMessenger.observers.forEach((observer: Function) => observer(data));
    }
}
