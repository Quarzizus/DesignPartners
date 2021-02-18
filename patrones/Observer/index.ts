interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (obsever: Observer) => void
}

class Bitcoin implements Subject {
    observers: Observer[] = []

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', () => {
          this.notify(el.value);
        });
    }
    subscribe(observer: Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        this.observers.splice(index, 1)
    }
    notify(data: any){
        this.observers.forEach(observer => observer.update(data))
    }
}

class display implements Observer {
    private el: HTMLElement
    constructor(){
        this.el = document.querySelector('#price')
    }
    update(data: any) {
        this.el.innerText = data
    }
}

const value = new Bitcoin()
const displayP = new display()

value.subscribe(displayP)
// setTimeout(() => value.unsubscribe(displayP),5000);