interface IObserver {
  update(message: string): void;
}

interface IObservable {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(message: string): void;
}

class Publisher implements IObservable {
  private subscribers: Array<IObserver>;

  constructor() {
    this.subscribers = [];
  }

  attach(subscriber: IObserver): void {
    this.subscribers.push(subscriber);
  }

  detach(subscriber: IObserver): void {
    const targetIndex = this.subscribers.indexOf(subscriber);
    this.subscribers.splice(targetIndex, 1);
  }

  notify(message: string): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(message);
    }
  }
}

class Subscriber implements IObserver {
  update(message: string) {}
}
