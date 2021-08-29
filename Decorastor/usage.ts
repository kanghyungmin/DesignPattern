interface Component {
    operation(): String;
}


class ConcreateComponent implements Component {
    public operation(): String {
        return 'ConcreteCompnent';
    }
}

class Decorator implements Component {
    protected component : Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): String {
        return this.component.operation();
    }
}


class ConcreteDecoratorA extends Decorator {
    public operation() : string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}


class ConcreteDecoratorB extends Decorator {
    public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`       
    }
}

function cliendCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`)
}

const simple = new ConcreateComponent();
console.log('Client: I\'ve got a simple component:');
cliendCode(simple);
console.log('');


const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
cliendCode(decorator2);

