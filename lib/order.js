module.exports = order = {
    items: [], 
    total_price: 0,
    place: function() {
        if (this.items.length === 0)
            return false;
        // implement logic for placing order
    },
    remove: function(item) {
        if (this.items.length  === 0) {
            return false
        } else {
            this.items.remove(item);
            return item;
        }
    }
};