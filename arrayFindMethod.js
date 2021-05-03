const items =[
    {name: 'Bike',  price: 100},
    {name: 'Tv',  price: 200},
    {name: 'Album',  price: 10},
    {name: 'Book',  price: 5},
    {name: 'Computer',  price: 500},
    {name: 'Phone',  price: 1000},
    {name: 'Keyboard',  price: 25},
]

const foundItem = items. find((item)=>{
    return item.name=== "Book"
});

console.log(foundItem);