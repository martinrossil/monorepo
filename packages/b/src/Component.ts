import IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
    public sku: number;
    public name: string;
    public constructor(sku: number, name: string) {
        super();
        console.log('Component');
        this.sku = sku;
        this.name = name;
    }
}
customElements.define('a-a', Component);
