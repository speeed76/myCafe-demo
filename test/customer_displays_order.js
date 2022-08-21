'use strict'

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const orderSystemWith = require('../lib/orders');

describe('Customer display order', () => {
    context('Given that the order is empty', ()=> {
        beforeEach(()=> {
            var orderADO = {
                byId: sinon.stub();
            };
            orderSystem = orderSystemWith(orderADO);

            this.result = orderSystem.display('some empty order id');

            orderADO.byId.withArgs('some empty order id').returns([]);
        })

        it('will show no order items', () => {
            expect(order).to.be.empty;
            // unimplemented
        });
        it('will show 0 as the total price');
        it('will not be possible to place an order');
        it('will only be possible to add a beverage');

    });

    context('Given that the order contains beverages', () => {
        it('will hsow one item per beverage');
        it('will show the sum of the unit prices as a total price');
        it('will be possible to place the order');
        it('will be possible to add a beverage');
        it('will be possible to remove a beverage');
        it('will be possible to change the quantity of a beverage');
    });

    context('Given that the order has pending messages', () => {
        it('will show the pending messages');
        it('there will be no more pending messages');
    });

});