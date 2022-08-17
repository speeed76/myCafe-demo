'use strict'

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const order = require('../lib/order');

describe('Customer display order', () => {
    
    context('Given that the order is empty', ()=> {
/*         let order = {
            items: [], 
            total_price: 0,
            place: function() {
                return false;
            },
            remove: function(item) {
                if (this.items.length  === 0) {
                    return false
                } else {
                    this.items.remove(item);
                    return item;
                }
            }
        }; */

        it('will show no order items', () => {
            expect(order.items).to.be.empty;
        });

        it('will show 0 as the total price', () => {
            expect(order.total_price).to.be.equal(0);
        });

        it('will not be possible to place an order', () => {
            expect(order.place()).to.be.false;
        });

        it('will only be possible to add a beverage', () => {
            let aBverage = 'beverage';
            expect(order.remove(aBverage)).to.be.false;
        });

    });

    context('Given that the order contains beverages', () => {
        it('will show one item per beverage');
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