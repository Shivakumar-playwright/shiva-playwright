const car={
    name: "Toyota",
    model: "Camry",
    year: "2015",
    color:"red",
    price: 20000
}
//Acessing the property
console.log(car.name)
console.log(car['year'])

//modifying
car['price']=300000
console.log(car['price'])
console.log(car)

//adding a new property
car.owner="shiva"
console.log(car)

//deleting a property
delete car.year
console.log(car)

//for...in loop is used to access all the property/keys in an object

const menuitems={
    menu1:"Admin",
    menu2:"PIM",
    menu3:"Leave"
}
for(let item in menuitems){
    console.log(menuitems[item])
}