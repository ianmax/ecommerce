var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: [],
    cart: [],
    checkout: [],
    totalprice: 0,
    username: '',
    email: '',
    password: '',
  },
  methods: {
    findAllListings: function () {
      axios.get('http://localhost:3000/items')
      .then((response) => {
        this.items = response.data;
      })
      .catch(err => {
        console.error(err);
      });
    },

    addToCart: function (item) {

      function cariIndex(arr) {
        return arr._id == item._id;
      }

      var indeks = this.cart.findIndex(cariIndex);
      if (indeks == -1) {
        item.quantity = 1,
        item.subtotal = item.price,
        this.cart.push(item);
      } else {
        this.cart[indeks].quantity = this.cart[indeks].quantity + 1;
        this.cart[indeks].subtotal = this.cart[indeks].price * this.cart[indeks].quantity;
      }

      this.checkout.push(item._id);
      this.totalprice = this.totalprice + item.price;
    },

    removeOne: function (item) {
      this.cart.forEach(item => {
        if (item._id === item._id) {
          if (item.amount > 0) {
            item.amount = (item.amount - 1);
          }
        }
      });
    },

    checkouttodb: function () {
      axios.post('http://localhost:3000/transaction/buy', {
        customer: '5a15832883ba6f1872bfbfe1',
        totalprice: this.totalprice,
        item: this.checkout,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.checkout = [];
      this.cart = [];
      this.totalprice = 0;
    },

    signup: function () {
      axios.post('http://localhost:3000/users/signup', {
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(this.username, this.password, this.email);
    },

    remove: function (item) {
      let indexItem = -1;
      this.cart.forEach((item, index) => {
        if (item._id === item._id) {
          indexItem = index;
        }
      });
      this.cart.splice(indexItem, 1);
    },

    clearHistory: function () {
      this.checkout = [];
      this.cart = [];
      this.totalprice = 0;
    },

    addProduct: function () {
      axios.post('http://localhost:3000/items', {
        name: this.name,
        image: this.image,
        stock: this.stock,
        price: this.price,
        description: this.description,
        category: this.category,
        subcategory: this.subcategory,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },

  created: function () {
    this.findAllListings();
  },
});
