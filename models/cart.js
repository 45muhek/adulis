module.exports = function Cart(oldCrart) {
  this.items = oldCrart.items || {}; //if oldcart is not diggined use empity as default
  this.totalQty = oldCrart.totalQty || 0;
  this.totalPrice = oldCrart.totalPrice || 0;

  this.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price * 1; //*1 is there to treat the variable as intiger
  };
  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
