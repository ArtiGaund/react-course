import express from 'express';

// Creating an app using Express
const app = express();
 

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 2,
            name: 'table glass',
            price: 250,
            image: 'https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 3,
            name: 'table plastic',
            price: 150,
            image: 'https://images.pexels.com/photos/5273119/pexels-photo-5273119.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 4,
            name: 'table metal',
            price: 300,
            image: 'https://images.pexels.com/photos/13801636/pexels-photo-13801636.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 5,
            name: 'table polyester',
            price: 150,
            image: 'https://images.pexels.com/photos/18567306/pexels-photo-18567306/free-photo-of-milk-coffee-wax-candle-and-book.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
    ]   
     // doing searching on the bases of keyword or name http://localhost:3000/api/products?search=metal  
    // this is known as query parameters (?), we are using seach after ? thats why we are using req.query.search
    if(req.query.search){
        // we want to filter products on the bases of names
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    // i don't want to do immediate respond, we want some delay
    // we similate to send request after some time (3 sec timeout)
    setTimeout(() => {
        res.send(products);
    }, 3000);
   
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});