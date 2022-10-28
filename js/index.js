const create = (element) => document.createElement(element)
const select = (element) => document.querySelector(element)

const main = document.querySelector(".container")
const ulCard = document.querySelector(".containerCard")
const ulCart = document.querySelector("#marketCart")

for(const itens of data){
    document.querySelector(".containerCard").insertAdjacentHTML(
        "beforeend",
        `<li class="cardProduct">
        <img src=${itens.img} alt=""/>
        <div id="descripitionCart">
            <span>${itens.tag[0]}</span>
            <h3>${itens.nameItem}</h3>
            <p>${itens.description}</p>
            <h4>R$ ${itens.value},00</h4>
            <button id='${itens.id-1}' class="buyProduct">Adcionar ao Carrinho</button>
        </div>
        </li>    
          `
    )
    }

let valorTotal = 0
    function configCard(element,index){
        const cartRender = ulCart.insertAdjacentHTML(
            "beforeend",
            `<li class="marketProduct">
            <figure>
                <img src="${element.img}" alt="">
            </figure>
            <div id="cardMarket">
            <h3>${element.nameItem}</h3>
            <p>R$ ${element.value},00</p>
            <button id='${index}' class="removeCard">Remover do Carrinho</button>
        </div>
        </li>`
        )
    
        return cartRender
    }
    

    const quantidade =document.querySelector("#quantidade")
    const total = document.querySelector("#resultado") 


let addCard = []
addEventListener("click", (event) => {
    let render = event.target
    if(render.className == "buyProduct"){
        addCard.push(data[render.id])
        ulCart.innerHTML = ''
        addCard.map(configCard)
        quantidade.innerText=addCard.length
        valorTotal=addCard.reduce((acc,e)=>acc+e.value,0)
        total.innerText = `${valorTotal},00`
    }
    if(render.className == "removeCard"){
        addCard.splice(render.id,1)
        ulCart.innerHTML = ''
        addCard.map(configCard)
        quantidade.innerText=addCard.length
        valorTotal=addCard.reduce((acc,e)=>acc+e.value,0)
        total.innerText = `${valorTotal},00`
    }
})






 









