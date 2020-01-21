import {  decorate, observable } from "mobx";
import axios from "axios";

class coffeeStore{
    coffeeshops = []
    loading = true

    fetchAllCoffeeShops = async () => {
        res = await axios.get("http://178.128.114.232/api/?format=json");
        this.coffeeshops = res.data;
        this.loading = false;

    }

    getShopById = (id) => {
        return this.coffeeshops.find( (shop) => {
            return shop.id == id;
        });
    }
}


decorate(coffeeStore, {
    coffeeshops: observable,
    loading: observable
})

const store = new coffeeStore();
store.fetchAllCoffeeShops();

export default store;