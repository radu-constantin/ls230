var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      // $("#order_date").text(date.toUTCString());
      document.querySelector('#order_date').textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      var iTmpl = document.querySelector('#inventory_item')
      this.template = iTmpl.innerHTML;
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      idx = Number(idx);
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;
      id = Number(id);
      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(item) {
      var id = this.findID(item),
          itemObj = this.get(id); //the actual object in the collection

      itemObj.name = item.querySelector(`[name=item_name_${itemObj.id}]`).value;
      itemObj.stock_number = item.querySelector(`[name=item_stock_number_${itemObj.id}]`).value;
      itemObj.quantity = item.querySelector(`[name=item_quantity_${itemObj.id}]`).value;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      var itemTemplate = Handlebars.compile(this.template);
      
      document.querySelector("#inventory").insertAdjacentHTML('beforeend', itemTemplate(item));
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return item.querySelector("input[type=hidden]").value; 
    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = this.findParent(e)
      item.remove();

      this.remove(this.findID(item));
    },
    updateItem: function(e) {
      var item = this.findParent(e);  // tr

      this.update(item);
    },
    bindEvents: function() {
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
      newItem = this.newItem.bind(this);
      deleteItem = this.deleteItem.bind(this);
      updateItem = this.updateItem.bind(this);

      document.querySelector('#add_item').addEventListener('click', newItem);
      document.querySelector('#inventory').addEventListener('click', (event) => {
        if (event.target.className === 'delete') {
          this.deleteItem(event);
        }
      });
      document.querySelector('#inventory').addEventListener('blur', (event) => {
        console.log('blur');
          if (event.target.tagName === 'INPUT') {
            this.updateItem(event);
          }
      })
      
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

// $($.proxy(inventory.init, inventory));
document.addEventListener('DOMContentLoaded', () => {
  inventory.init();
})
