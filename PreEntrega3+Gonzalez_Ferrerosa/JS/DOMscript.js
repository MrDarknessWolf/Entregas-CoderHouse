/* Mi Proyecto es una recreacion del ABD(bayero) de animal crossing, es similar
a un cajero automatico, sin embargo tiene dos metodos de pago, puntos 
de fidelidad o con la moneda del juego "Bayas" o en ingles "Bells" */
/*changelog

Se cambiaron los productos a ser objetos con un solo product create.
Se cambio el metodo de seleccion a solo necesitar la posicion del producto sin necesidad de un case para cada uno
Se añadio metodo de busqueda al nook shooping
Se añadieron mas productos al nook shopping
Se añadio metodo de ordenar productos del nook shopping
Se añadieron mas loops en caso de querer seguir comprando dentro de lista ordenada o en una busqueda
Se aprovechan los NaN como parametros de salida o se agarran antes de generar error.
Se desactivo el log in para mayor facilidad de probar el codigo

changelog 0.1
-Se cambio el metodo de inicio de seccion de prompts a inputs, adicionalmente se dio la opcion de 
guardar en el usuario o borrar la informacion guardada
-Se nueve ek codigo del menu para mejor lecura
*/
//**clase plantilla de objetos */
class product {
  constructor(idNum, nombre, precio, currency, description) {
    //**name es un nombre reservado por eso toca en español */
    this.idNum = idNum;
    this.nombre = nombre;
    this.precio = precio;
    this.currency = currency;
    this.description = description;
  }
}

/** variables productos miles */
const milesProducts = [
  new product(
    Math.floor(Math.random() * 100),
    "Traveling ticket",
    300,
    "Miles",
    "Fly ticket reedem in airport"
  ),
  new product(
    Math.floor(Math.random() * 100),
    "DIY Workbench",
    200,
    "Miles",
    "Make your own tools with this DIY workbench recipe"
  ),
  new product(
    Math.floor(Math.random() * 100),
    "Sun Hat",
    3000,
    "Miles",
    "Protect your head from this harsh summer days, only available in yellow"
  ),
  new product(
    Math.floor(Math.random() * 100),
    "Froggie chair",
    400,
    "Miles",
    "Sit comfy in this state of the art froggie chair ribbit"
  ),
  new product(
    Math.floor(Math.random() * 100),
    "Leaf umbrella",
    500,
    "Miles",
    "Rain rain go away with this classic nature desing umbrella"
  ),
];
/**variables de productos nookstore */
const storeProducts=[
  new product(Math.floor(Math.random() * 100),'Book',290,"bells"),
  new product(Math.floor(Math.random() * 100),'World Map',640,"bells"),
  new product(Math.floor(Math.random() * 100),'Rain Hat',880,"bells"),
  new product(Math.floor(Math.random() * 100),'Bandage',140,"bells"),
  new product(Math.floor(Math.random() * 100),'MVP Tee',640,"bells"),
  new product(Math.floor(Math.random() * 100),'No.2 Shirt',560,"bells"),
  new product(Math.floor(Math.random() * 100),'Demin Skirt',1120,"bells"),
  new product(Math.floor(Math.random() * 100),'Rain Boots',290,"bells"),
  new product(Math.floor(Math.random() * 100),'wet Suit',3000,"bells"),
  new product(Math.floor(Math.random() * 100),'Squid Hat',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Love Song',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Metalica',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Sonata',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Fiesta',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'Luigi Hat',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'Mario Hat',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'Mario Shoes',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'Luigi Shoes',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'Wario Shoes',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'Shiny Boots',290,"bells"),
  new product(Math.floor(Math.random() * 100),'Wario Hat',1500,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Disco',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Folk',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Aloha',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album BubbleGum',3200,"bells"),
  new product(Math.floor(Math.random() * 100),'K.K Album Blues',3200,"bells"),

];
///////////////////**/// */
const villager = "ABD-Debug"; /*USARIO Y CONTRASEÑA PRE DEFINIDO */
const password = "1234";
let miles = 8000;
let bells = 150000;
let authorize = 2;

let logiBtn=document.getElementById("login-btn");
let regBtn=document.getElementById("registerBtn");
let nukeBtn=document.getElementById("nukeBtn");
let Rmbr=document.getElementById("remember");
let attempts = 3;

const savedData = JSON.parse(localStorage.getItem('userInfo'));
const tempData=   JSON.parse(sessionStorage.getItem('userInfo'));
let storing=""
//** funcion de inicio de session*/


function logon(e,sData,storing){
  /*Funcion de log in con usuario y contraseña de 3 intentos*/
  let usrnInput=(document.getElementById("userAdress").value);
  
  let passInput= (document.getElementById("passwordKey").value)
  /**console.log(passInput);*/
 if(villager!==usrnInput){
    Toastify({
      text: "Sorry the username is not registered",
      gravity: "top",
      position:"center",
      className: "info",
      style: {
        background: "red",
      }
    }).showToast();
    }
  else if(usrnInput==""){
    Toastify({
      text: "Please fill both boxes",
      gravity: "top",
      position:"center",
      className: "info",
      style: {
        background: "#7a673f",
      }
    }).showToast();
  }
  else if(passInput==""){
    Toastify({
      text: "Please fill both boxes",
      gravity: "top",
      position:"center",
      className: "info",
      style: {
        background: "#7a673f",
      }
    }).showToast();
  }
    else if(password!==passInput){
      attempts=attempts-1;
      Toastify({
        text: "Oh no some information was incorrect attempts left: "+attempts,
        gravity: "top",
        position:"center",
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
      
      console.log(attempts);
      if(attempts<1){
        document.getElementById("menu").innerHTML =
        `
        <div class="login__cancel">
          <p class="login__paragraph">We are sorry, please reload the page </p>
          </div>`
      }
    }
    else if(usrnInput===villager && passInput===password){
      let userInfo=""
      console.log(sData.bells);

      if(sData.bells>=0){
        userInfo={"user": usrnInput,"pass": passInput,
        "bells": sData.bells,"miles":sData.miles};
      }else{
        userInfo={
        "user": usrnInput,"pass": passInput,
        "bells": bells,"miles":miles
      }}
       console.log(storing)
      storing.setItem('userInfo',JSON.stringify(userInfo))
      location.reload();
      mainMenu(userInfo);  
      }
  }
  
/*/////////////////////// funcion de la tienda miles///////////////////////*/
function nookMiles(storage,storing) {
 /**///////////////////////// */ 
 let message = "";
 for (i = 0; i < milesProducts.length; i++) {//crea la lista de objetos fuera para que no tenga problemas creando duplicados
  message+=
  `<button class="menu__btn" id=`+i+`>`+ milesProducts[i].nombre +` </button> `
 }   
  function reloadMenu(){
  
  document.getElementById("menu").outerHTML =
  `<section class="product" id="menu">
  <h1 class="menu__title"> Nook Miles reedeming shop</h>
  <div class="menu__finances">
      <h3 class="miles">`+storage.miles +` Miles</h3>
  </div> <div class="menu__selection" id="selectProduct">`
       
  document.getElementById("selectProduct").innerHTML =message+ `<br><button class="menu__btn" id="backMenu">Main menu</button></div> </section>`;
  console.log("menu reloaded")

  /**/////////////////// */
  let selectItem=document.getElementById('selectProduct');
  console.log(selectItem);
  selectItem.addEventListener('click',(event)=>{
      const btnon=event.target;
      const btnonID=btnon.id;
      console.log("hello this is "+ btnonID +" "+milesProducts[btnonID].nombre);
      let selection =confirm("reedem "+milesProducts[btnonID].nombre+ " for "+milesProducts[btnonID].precio+" miles?");


      if(selection==true){
        console.log(storage.miles)
        if(milesProducts[btnonID].precio>storage.miles){
          alert("Sorry you dont have enought miles");
          storing.setItem('userInfo',JSON.stringify(storage));}
          else {
            storage.miles=storage.miles-milesProducts[btnonID].precio;
            storing.setItem('userInfo',JSON.stringify(storage));
            reloadMenu();
      }
      }});

  backMenu.addEventListener('click',()=>{
    mainMenu(storage);
    });}
  reloadMenu();
}
/**menu para la tienda de items */
function order(selection,catalogList){
  let orderArray=catalogList.slice(0);
switch (selection) {
  case "1":
    return orderArray.sort((b,a)=>b.precio -a.precio);
  case "2":
    return orderArray.sort((a,b)=>b.precio -a.precio);
  case "3":
    let descendingArray= orderArray.sort((b,a)=>b.nombre.localeCompare(a.nombre));
   return descendingArray;
  case "4":
    let ascendingArray= orderArray.sort((a,b)=>b.nombre.localeCompare(a.nombre));
   return ascendingArray;
   default:
    alert("Invalid selection");
    break;
}
}
//////////////////////////////
function findItem(query,catalog){
  const filtrado= catalog.filter(catalog=>catalog.nombre.includes(query));
  return filtrado;
  }

function seachbar(){
  document.getElementById("menu").outerHTML =
  `<section class="product" id="menu">
  <h1 class="menu__title"> Welcome to the catalog <br>Popular right now: Albums,Shoes,Hats</h1>
  <div class="menu__finances" id="selectProduct">
  <input type="seach" placeholder="im looking for.." class="login__input" id="lookingFor">
  <button type="submit" id="seachNow" class="login__cta">Search</button>
  <br><button class="menu__btn" id="backMenu">Main menu</button></div>`
}
function findItem(query,catalog){
  const filtrado= catalog.filter(catalog=>catalog.nombre.includes(query));
  return filtrado;
  }

/////////////////////////////////////////////////////////////////
  function loadMenu(storage,orderList,storing){
  let message = "";
  for (i = 0; i < orderList.length; i++) { //saco la lista automatica para que no la exienda en la actualizacion de datos
    message+=
    `<input type=checkbox class="menu__btn" id=`+i+` value= `+orderList[i].precio+`><span class="label">`+orderList[i].nombre + "- price: "+orderList[i].precio+" bells"+ `</span> </input>`
    };       
  function reloadMenu(orderList){
     document.getElementById("menu").outerHTML =
    `<section class="product" id="menu">
    <h1 class="menu__title"> Nook shop<br>Please select an item <br>Scroll to see more</h1>
    <div class="menu__finances">
        <h3 class="bells">`+storage.bells +` bells</h3>
    </div> <div class="menu__form" id="selectProduct">`
    document.getElementById("selectProduct").innerHTML =message+   
    `<br><p>Total Price: <span id="totalPrice">$0.00</span></p>
    <br><button class="menu__btn" id="payNow">Pay now</button> </section>
    </div>
    <br><button class="menu__btn" id="backMenu">Main menu</button> </section>`;
    console.log("menu reloaded")

    //////
    let shplist=document.getElementById('selectProduct');

    let totalAmount=document.getElementById('totalPrice');
    let checkers=shplist.querySelectorAll('input[type=checkbox]');
    //console.log(checkers)
    let totalPrice = 0;
    checkers.forEach((box) => {
      console.log(box);
      box.addEventListener("change", () => {
        
        //box.forEach((checkbox) => {
          if (box.checked) {
            totalPrice += parseFloat(box.value);
            
          }
          else if(box.checked==false){totalPrice -= parseFloat(box.value)}
          console.log(totalPrice)
        totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

      payNow.addEventListener('click',()=>{
        console.log("ready");
        let red2go=confirm("Your total is "+totalAmount.textContent +" bells"+"\nAre you sure?");
        console.log(storage.bells)
        if(totalPrice>storage.bells){
          //alert("Sorry you dont have enought bells");
            Toastify({
              text: "sorry it seems you dont have enough bells",
              gravity: "top",
              position:"center",
              className: "info",
              style: {
                background: "red",
              }
            }).showToast();
          storing.setItem('userInfo',JSON.stringify(storage));}
          else if(red2go){
            storage.bells=storage.bells-totalPrice;
            console.log("check out this "+ storage.bells)
            console.log("saving in" + storing)
            storing.setItem('userInfo',JSON.stringify(storage));
            reloadMenu(orderList);
          }
        });
      backMenu.addEventListener('click',()=>{
        location.reload();
        });
        };
  reloadMenu(orderList);
}
////////////////////////////////
function shopping(storage,storing) {
  let orderList=[];
  function filtrMenu(){
    document.getElementById("menu").outerHTML =
    `<section class="product" id="menu">
    <h1 class="menu__title"> Wellcome to nook shooping, please select order of catalog display</h1>
    <div class="menu__finances" id="selectProduct">
    <button class="menu__btn" id="1">Cheapest first</button>
    <button class="menu__btn" id="2">Most expensive first</button>
    <button class="menu__btn" id="3">Acending name</button>
    <button class="menu__btn" id="4">Decended name</button>
    <button class="menu__btn" id="5">Product search</button>
    <br><button class="menu__btn" id="backMenu">Main menu</button></div>
    `
  /////////////now listening for the buttons...
    let selectItem=document.getElementById('selectProduct');
    console.log(selectItem);
    selectItem.addEventListener('click',(event)=>{
        const btnon=event.target;
        const btnonID=btnon.id;
        console.log("hello this is "+ btnonID);
        if(btnonID<=4){
        orderList=order(btnonID,storeProducts);
        console.log(orderList)
      loadMenu(storage,orderList,storing)}
      //////////////this gives me the search options
      else if (btnonID == 5){
        let searchquer="";
        console.log("beging search");
        seachbar();
        backMenu.addEventListener('click',()=>{
          location.reload();
          });
        seachNow.addEventListener('click',()=>{
          searchquer=document.getElementById('lookingFor').value;
          console.log(searchquer);
          let correctCase= searchquer.charAt(0).toUpperCase(); //metodo para evitar entren minusculas 
          let remainLetter=searchquer.slice(1);
          let newQuery=correctCase+remainLetter;
          console.log(newQuery);
          let catFind=findItem(newQuery,storeProducts);
          loadMenu(storage,catFind,storing);
        })       
      }

    })

    backMenu.addEventListener('click',()=>{
      mainMenu(storage);
      });
}

///////////////////////////////////////////////////
  filtrMenu();

}
////// una simple funcion de añadir fondos
function updateAmount(operation,amount,storage,storing){
  if(operation==1){
    console.log("current: "+storage.bells);
    if(confirm("deposit: "+amount + " bells?")){
      
      storage.bells=storage.bells+amount;
      storing.setItem('userInfo',JSON.stringify(storage));
      
    }
  }
  else{
    if(amount>storage.bells){
      Toastify({
        text: "It seems you dont have enough bells in this account",
        gravity: "top",
        position:"center",
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
    }
    else{
      if(confirm("Widrawl: "+amount + " bells?")){
      
        storage.bells=storage.bells-amount;
        storing.setItem('userInfo',JSON.stringify(storage));
    }

  }
}
}
/////////////////////menu del ATM que carga botones y hace trigger a las funciones
function ATM(storage,storing){
  function reloadMenu(){
  document.getElementById("menu").outerHTML =
  `<section class="product" id="menu">
  <h1 class="menu__title"> Wellcome to the ATM <br>Current amount</h>
  <div class="menu__finances">
  <h3 class="bells">`+storage.bells+ ` Bells</h3></div> 
  <input type="number" min="0" placeholder="Define the amount " class="login__input" id="amount">
  <div class="login__buttongroup">
  <button class="menu__btn" id=deposit>Deposit some bells </button>
  <button class="menu__btn" id=withdraw> Witdrawl some bells</button>
  <br><button class="menu__btn" id="backMenu">Main menu</button>
  </div>
  </section>`
  
  backMenu.addEventListener('click',()=>{
    location.reload();
    });
  deposit.addEventListener('click',()=>{
    let amount=parseInt(document.getElementById("amount").value);
    if(isNaN(amount)){amount=0}
    console.log(amount)
    //console.log("ready");
    updateAmount(1,amount,storage,storing);
    reloadMenu();
  });
  withdraw.addEventListener('click',()=>{
    let amount=parseInt(document.getElementById("amount").value);
    if(isNaN(amount)){amount=0}
    console.log(amount)
    //console.log("ready");
    updateAmount(0,amount,storage,storing);
    reloadMenu();
  });
}
reloadMenu();
}
/**Menu nuevo para log in, en este mira si hay info dentro del local storage que se relacione con un usuario
esto dado que el usuario haya marcado la casilla de remember me y hace log in en automatico o
si en caso tal de estar trabajando en la paguina que al recargar no se log out*/




function mainMenu(storage,storing){
  document.getElementById("Styles").outerHTML =
  `<link rel="stylesheet" href="./CCS3/menustyles.css" id="Styles">`
  let currentMenu =
    `<section class="menu" id="menu">
    <h2 class="menu__title"> Welcome `+storage.user+` to the ABD terminal <br> please select from the following menu</h2>
    <div class="menu__finances">
            <h3 class="bells">`+storage.bells+ ` Bells</h3>
            <h3 class="miles">`+storage.miles+ ` Miles</h3>
        </div> 

    <div class="menu__selection">
        <button class="menu__btn" id="milesbtn">Nook miles catalog</button>
        <br> 
        <button class="menu__btn" id="bellsbtn">Nook Shopping</button>
        <br>              
        <button class="menu__btn" id="ATMbtn">Bell ATM</button>
        <br> 
        <button class="menu__btn" id="logOut">LogOut</button>
  </div> 
  </section>`
  document.getElementById("menu").outerHTML =currentMenu;

///** variables del menu principal creadas dentro porque si se crean antes del menu entra en valor null*/
  let logOout=document.getElementById("logOut");
  let milesbtn=document.getElementById("milesbtn");
  let bellsbtn=document.getElementById("bellsbtn"); 
  let ATMbtn=document.getElementById("ATMbtn");
  /** *////
  milesbtn.addEventListener('click',()=>{
    console.log("reedeming miles");
    nookMiles(storage,storing);
  });

  /**/// */
  bellsbtn.addEventListener('click',()=>{
    console.log("lets go shopping");
    shopping(storage,storing);
  });
  ATMbtn.addEventListener('click',()=>{
    console.log("accessing savings");
    ATM(storage,storing);
  });


  logOout.addEventListener('click',()=>{
    console.log("leaving so soon?");
    storage.pass='';
    storage.user='';
    if(Rmbr.checked){
      localStorage.setItem('userInfo',JSON.stringify(storage));}
    sessionStorage.setItem('userInfo',JSON.stringify(storage));
    location.reload();
  });



  }
/** funcion que me permite que al cargar la paguina mire si hay datos guardados para evitar log in o si se recarga o cierra mantega sesion*/
function autologin(savedData,tempData){
  /*console.log("recived")*/
  if(savedData !==null){ 
    if(savedData.user==villager && savedData.pass ==password){
      console.log("Welcome back");
      mainMenu(savedData,localStorage);
    }}
  else if( tempData !== null){
    if(tempData.user==villager && tempData.pass ==password){
      console.log("Temp Back");
      mainMenu(tempData,sessionStorage);
    }
  }
  }
////////////////

let sData="";
logiBtn.addEventListener('click',(e,savedData,tempData)=>{
  

  e.preventDefault();
  if(savedData===undefined){
    if(tempData===undefined){
      console.log("huh")
      sData={"bells":-1};
    //*console.log(sData)*/ 
    }
      else{
    sData=tempData;}
  }
  else{
  sData=savedData;}
  //console.log("whyim null"+ sData)
  if (Rmbr.checked==true){
    console.log("local storage");
    logon(e,sData,localStorage);}
  else{
  console.log("session storage");
  logon(e,sData,sessionStorage);
}

  
  }); 
regBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  Toastify({
    text: "comming soon---",
    gravity: "top",
    position:"center",
    className: "info",
    style: {
      background: "#cc9900",
    }
  }).showToast();

})

nukeBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  Toastify({
    text: "Sparkling clean",
    gravity: "top",
    position:"center",
    className: "info",
    style: {
      background: "red",
    }
  }).showToast();
  localStorage.clear();
  sessionStorage.clear();
  sData={"bells":-1};
  location.reload();
})

autologin(savedData,tempData);
/**/ ////////////////////////////////////////////////////////////// */

