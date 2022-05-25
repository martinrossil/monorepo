import Component from '../src/Component';
import IComponent from '../src/IComponent';
import { assert } from 'chai';

describe('IComponent.sku property', () => {
    it('given sku value in the constructor is 123, sku should be 123', () => {
        const component: IComponent = new Component(123, '');
        assert.strictEqual(component.sku, 123);
    });
});
