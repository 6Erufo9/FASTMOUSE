
//Hidden Cart

const interaction = document.querySelector(`.InteractionPurchase`)
var number = 0;

const cart = document.querySelector('.PurchaseCart');
const container = document.querySelector('.CounterListProducts')

cart.addEventListener('click',() =>{    
    container.classList.toggle('HiddenListProducts');
})


// Add products

const counterListProducts = document.querySelector('.ConuterListProducts')
const listProducts = document.querySelector('.ListProducts')


const productsList = document.querySelector('.ContentMouse')



let allProducts = []


const valorTotal = document.querySelector('.Total')

const amountProducts = document.querySelector('#CounterProducts')


productsList.addEventListener('click', e =>{

    if(e.target.classList.contains('AddProduct')){
        const product = e.target.parentElement
        
        const infoProduct = {
            quantity: 1,
            name: product.querySelector('.NameMouse').textContent,
            price: product.querySelector('.PriceMouse').textContent
        }

        const counterProducts = allProducts.some(product => product.name === infoProduct.name)      
        
        if(counterProducts){
            const products = allProducts.map(product => {
                if(product.name === infoProduct.name){
                    product.quantity++;
                    return product
                }
                else
                {
                    return product
                }
            })
            allProducts = [...products]
        }else{
            allProducts = [...allProducts, infoProduct]
        }

        if(allProducts.length === 1 && number === 0){
            interaction.classList.toggle('HiddenCart');
            number = number + 1;
            console.log(number)
        }        
    
        showInfo()
    }    

})


const showInfo = () =>{
    
    listProducts.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;
    
    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('.ListProducts')

        containerProduct.innerHTML = `       
        
        <div class="InfoProduct">
            <span class="Amount">${product.quantity}</span>
            <h4 class="Name">${product.name}</h4>
            <span class="Price">${product.price}</span>
            <span class="Delete">X</span>
        </div>  
                        
        `

        listProducts.append(containerProduct)

        total = total + (product.quantity * product.price.slice(1).replace(/,/g, ''))
        totalOfProducts = totalOfProducts + product.quantity;        
    })
    
    if(allProducts.length < 1 ){
        interaction.classList.toggle('HiddenCart');
        number = number -1;
    }

    valorTotal.innerText = `$ ${total.toLocaleString('es-MX')}`;
    amountProducts.innerText = totalOfProducts;         
    
    
}

//Delete Products

listProducts.addEventListener('click', (e) => {
    if(e.target.classList.contains('Delete')){
        const product = e.target.parentElement
        const name = product.querySelector('.Name').textContent
        
        allProducts = allProducts.filter(product => product.name !== name);
        console.log(allProducts)        
    }


    showInfo()
})