document.getElementById("welcome").innerText =
"Welcome Kurra Jagadeesh Nadh";

let products = [

{
name:"Laptop",
price:50000
},

{
name:"Mobile Phone",
price:20000
},

{
name:"Headphones",
price:3000
},

{
name:"Smart Watch",
price:5000
}

];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

showProducts();
showCart();

function showProducts(){

let html="";

products.forEach((product,index)=>{

html += `
<div class="product">

<h2>${product.name}</h2>

<p>Price: ₹${product.price}</p>

<button onclick="addToCart(${index})">
Add To Cart
</button>

</div>
`;

});

document.getElementById("products").innerHTML =
html;

}

function addToCart(index){

cart.push(products[index]);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

showCart();
}

function showCart(){

let html="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

html += `
<p>

${item.name} - ₹${item.price}

<button onclick="removeItem(${index})">
Remove
</button>

</p>
`;

});

document.getElementById("cart").innerHTML =
html;

document.getElementById("total").innerText =
"Total: ₹" + total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

showCart();
}

function checkout(){

if(cart.length===0){

alert("Cart is Empty");

return;
}

alert("Order Placed Successfully");

cart=[];

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

showCart();
}
