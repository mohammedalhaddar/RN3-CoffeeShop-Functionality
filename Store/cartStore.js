import { decorate, observable, computed } from "mobx";

class cartStore{
    items = []
    
    get quantity(){
        return this.items.reduce( (acc, curr) => {
            return acc + curr.quantity
        }, 0)
    }

    addItemsToCart = (item) => {
        // check if it exists or not
        const exists = this.items.find( obj => (obj.drink == item.drink) && (obj.option == item.option))
        if (exists){
            console.log("exist heeere")
            this.items[this.items.indexOf(exists)].quantity += item.quantity
        }else{
            console.log("DNE heeere")
            this.items.push(item)
        }
    }

    removeItemFromCart = (item) => {
        this.items.splice(this.items.indexOf(item), 1)
    }

    checkoutCart = () => {
        this.items = []
        alert("Thank you for shopping with us")
    }
}

decorate(cartStore, {
    items: observable,
    quantity: computed
});

const store = new cartStore();

export default store;