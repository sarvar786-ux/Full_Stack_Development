import products from './data.js'

const rootDiv=document.querySelector("#root")

const categories=[
...new Set(products.map(
(product)=>product.category
)),
'All'
]

let menus=""

categories.forEach(
cat=>menus += `<li class="menuitems">${cat}</li>`
)

const olElement=document.querySelector(".navbar")
olElement.innerHTML=menus

function filterByCategory(value){

if(value==="All"){
rootDiv.innerHTML=products.map(
(product)=>`<h1>${product.title}</h1>`
).join("")
return
}

const filteredProducts=products.filter(
(prod)=>prod.category===value
)

let prodTitle1=""

filteredProducts.forEach(
(product)=>{
prodTitle1 += `<h1>${product.title}</h1>`
}
)

rootDiv.innerHTML=prodTitle1
}

const menuItems=document.querySelectorAll('.menuitems')

menuItems.forEach(
(item)=>item.addEventListener(
"click",
()=>filterByCategory(item.textContent)
)
)