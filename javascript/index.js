import { fooditems } from "./fooditem.js";

// console.log(fooditems);

function displayitems(){
    var biryani = document.getElementById('birayani');
    var chicken = document.getElementById('chicken');
    var paneer = document.getElementById('paneer');
    var chinese = document.getElementById('chinese');

    const biryanidata = fooditems.filter(item=> item.category=='biryani');
    const chickendata = fooditems.filter(item=> item.category=='chicken');
    const paneerdata = fooditems.filter(item=> item.category=='paneer');
    const chinensedata = fooditems.filter(item=> item.category=='chinese'); 

    biryanidata.map(item=>{
        var itemcard = document.createElement('div')
        itemcard.setAttribute('id','item-card')
        
        var cardtop = document.createElement('div')
        cardtop.setAttribute('id','card-top')

        var star = document.createElement('i')
        star.setAttribute('id','rating')
        star.setAttribute('class','fa fa-star')
        star.innerText = " " + item.rating

        var heart = document.createElement('i');
        heart.setAttribute('id',item.id)
        heart.setAttribute('class','fa fa-heart-o add-to-cart')

        cardtop.appendChild(star);
        cardtop.appendChild(heart);

        var img = document.createElement('img')
        img.src = item.img

        var itemname = document.createElement('p')
        itemname.setAttribute('id','item-name')
        itemname.innerText = item.name

        var itemprice = document.createElement('p')
        itemprice.setAttribute('id','item-price')
        itemprice.innerText = "price : $" + item.price

        itemcard.appendChild(cardtop)
        itemcard.appendChild(img)
        itemcard.appendChild(itemname)
        itemcard.appendChild(itemprice)

        biryani.appendChild(itemcard)
    })

    chickendata.map(item=>{
        var itemcard = document.createElement('div')
        itemcard.setAttribute('id','item-card')
        
        var cardtop = document.createElement('div')
        cardtop.setAttribute('id','card-top')

        var star = document.createElement('i')
        star.setAttribute('id','rating')
        star.setAttribute('class','fa fa-star')
        star.innerText = " " + item.rating

        var heart = document.createElement('i');
        heart.setAttribute('id',item.id)
        heart.setAttribute('class','fa fa-heart-o add-to-cart')

        cardtop.appendChild(star);
        cardtop.appendChild(heart);

        var img = document.createElement('img')
        img.src = item.img

        var itemname = document.createElement('p')
        itemname.setAttribute('id','item-name')
        itemname.innerText = item.name

        var itemprice = document.createElement('p')
        itemprice.setAttribute('id','item-price')
        itemprice.innerText = "price : $" + item.price

        itemcard.appendChild(cardtop)
        itemcard.appendChild(img)
        itemcard.appendChild(itemname)
        itemcard.appendChild(itemprice)

        chicken.appendChild(itemcard)
    })

    paneerdata.map(item=>{
        var itemcard = document.createElement('div')
        itemcard.setAttribute('id','item-card')
        
        var cardtop = document.createElement('div')
        cardtop.setAttribute('id','card-top')

        var star = document.createElement('i')
        star.setAttribute('id','rating')
        star.setAttribute('class','fa fa-star')
        star.innerText = " " + item.rating

        var heart = document.createElement('i');
        heart.setAttribute('id',item.id)
        heart.setAttribute('class','fa fa-heart-o add-to-cart')

        cardtop.appendChild(star);
        cardtop.appendChild(heart);

        var img = document.createElement('img')
        img.src = item.img

        var itemname = document.createElement('p')
        itemname.setAttribute('id','item-name')
        itemname.innerText = item.name

        var itemprice = document.createElement('p')
        itemprice.setAttribute('id','item-price')
        itemprice.innerText = "price : $" + item.price

        itemcard.appendChild(cardtop)
        itemcard.appendChild(img)
        itemcard.appendChild(itemname)
        itemcard.appendChild(itemprice)

        paneer.appendChild(itemcard)
    })

    chinensedata.map(item=>{
        var itemcard = document.createElement('div')
        itemcard.setAttribute('id','item-card')
        
        var cardtop = document.createElement('div')
        cardtop.setAttribute('id','card-top')

        var star = document.createElement('i')
        star.setAttribute('id','rating')
        star.setAttribute('class','fa fa-star')
        star.innerText = " " + item.rating

        var heart = document.createElement('i');
        heart.setAttribute('id',item.id)
        heart.setAttribute('class','fa fa-heart-o add-to-cart')

        cardtop.appendChild(star);
        cardtop.appendChild(heart);

        var img = document.createElement('img')
        img.src = item.img

        var itemname = document.createElement('p')
        itemname.setAttribute('id','item-name')
        itemname.innerText = item.name

        var itemprice = document.createElement('p')
        itemprice.setAttribute('id','item-price')
        itemprice.innerText = "price : $" + item.price

        itemcard.appendChild(cardtop)
        itemcard.appendChild(img)
        itemcard.appendChild(itemname)
        itemcard.appendChild(itemprice)

        chinese.appendChild(itemcard)
    })

}

displayitems();

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addtocart);
})

var cartdata = []

function addtocart(){
    // console.log(this.parentNode.nextSibling.nextSibling);
    var itemtoadd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemobj = fooditems.find(item=>item.name==itemtoadd)
    // console.log(itemobj)

    var index = cartdata.indexOf(itemobj);
    if(index === -1){
        document.getElementById(itemobj.id).classList.add('toggle-heart')
        cartdata = [...cartdata,itemobj]
        // console.log(cartdata)
    }
    else if(index>-1){
        alert("already added to cart")
    }

    document.getElementById('addtocart').innerText = ' ' +cartdata.length + ' Items'; 
    totalamount();
    cartitems();
}

function cartitems(){
    var tablebody = document.getElementById('table-body')
    tablebody.innerHTML = '';

    cartdata.map(item=>{
        var tablerow = document.createElement('tr')
        var rowdata1 = document.createElement('td')
        var img = document.createElement('img')
        img.src = item.img
        rowdata1.appendChild(img)

        var rowdata2 = document.createElement('td')
        rowdata2.innerText = item.name

        var rowdata3 = document.createElement('td')
        var btn1 = document.createElement('button')
        btn1.setAttribute('class','decrease-item')
        btn1.innerHTML = '-'
        var span = document.createElement('span')
        span.innerText = item.quantity
        var btn2 = document.createElement('button')
        btn2.setAttribute('class','increase-item')
        btn2.innerText = '+'
        rowdata3.appendChild(btn1)
        rowdata3.appendChild(span)
        rowdata3.appendChild(btn2)
        var rowdata4 = document.createElement('td')
        rowdata4.innerText = item.price
        tablerow.appendChild(rowdata1)
        tablerow.appendChild(rowdata2)
        tablerow.appendChild(rowdata3)
        tablerow.appendChild(rowdata4)
        tablebody.appendChild(tablerow)
    })

    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementitem)
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementitem)
    })
}

var currprice=0;

function incrementitem(){
    let itemtoinc = this.parentNode.previousSibling.innerText

    var incobj = cartdata.find(item=>item.name == itemtoinc)
    incobj.quantity+=1
    currprice = (incobj.price*incobj.quantity - incobj.price*(incobj.quantity-1))/(incobj.quantity-1)
    incobj.price = currprice*incobj.quantity
    // incobj.price = incobj.price*incobj.quantity
    totalamount();
    cartitems();
}

var flag = false;

function decrementitem(){
    let itemtodec =  this.parentNode.previousSibling.innerText
    let decobj = cartdata.find(item=>item.name == itemtodec)
    let ind = cartdata.indexOf(decobj)
    if(decobj.quantity>1){
        currprice = (decobj.price*decobj.quantity - decobj.price*(decobj.quantity-1))/(decobj.quantity)
        decobj.quantity-=1
        decobj.price = currprice*decobj.quantity
    }
    else{
        document.getElementById(decobj.id).classList.remove('toggle-heart')
        cartdata.splice(ind,1)
        document.getElementById('addtocart').innerHTML = ' ' + cartdata.length + ' Items'
        if(cartdata.length<1 && flag){
            document.getElementById('food-items').classList.toggle('food-items')
            document.getElementById('category-list').classList.toggle('food-items')
            document.getElementById('cart-page').classList.toggle('cart-toggle')
            // document.getElementById('category-header').classList.toggle('toggle-header')
            document.getElementById('checkout').classList.toggle('cart-toggle')
            flag = false
            alert("currently no items in the cart")
        }

    }
    totalamount();
    cartitems();
}

function totalamount(){
    var sum =0;
    cartdata.map(item=>{
        sum+=item.price
    })
    document.getElementById('total-item').innerText = 'Total Item : ' + cartdata.length
    document.getElementById('total-price').innerText = 'Total Price :$ ' + sum
}

document.getElementById('addtocart').addEventListener('click',carttoggle)

function carttoggle(){
    if(cartdata.length>0){
        document.getElementById('food-items').classList.toggle('food-items')
        document.getElementById('category-list').classList.toggle('food-items')
        document.getElementById('cart-page').classList.toggle('cart-toggle')
        // document.getElementById('category-header').classList.toggle('toggle-header')
        document.getElementById('checkout').classList.toggle('cart-toggle')
        flag=true
    }
    else{
        alert("currently no items in the cart")
    }
}

document.getElementById('addyouraddress').addEventListener('click',addaddress)

function addaddress(){
    var address = prompt('Enter your address')
    if(address){
        document.getElementById('addyouraddress').innerText = ' ' + address
    }
    else{
        document.getElementById('addyouraddress').innerText = ' Your Address'
        alert('address not added')
    }
}