
/* 
  {
    id:
    title: ,
    description: ,
    price: ,
    thumbnail: ,
    code: ,
    stock: ,

  }
*/

const idAutoIncrement = require("id-auto-increment");

class ProductManager{
    constructor(){
      this.products = [];
    }

     addProduct = async (product) => {
        
        try {
          const id = await idAutoIncrement();
          product.id = id;
        } catch (error) {
          console.log(error);
        }
        this.products.push(product);
        return this.products;
    }

    getProducts = () => {
      return this.products
    }
}

var pto = new ProductManager();
pto.addProduct({name: 'ale', price: 99})
pto.addProduct({name: '1ale', price: 199})
pto.addProduct({name: '2ale', price: 299})

 console.log(pto.getProducts())