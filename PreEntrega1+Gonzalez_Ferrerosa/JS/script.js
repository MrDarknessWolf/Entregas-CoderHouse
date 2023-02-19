/* Mi Proyecto es una recreacion del ABD(bayero) de animal crossing, es similar
a un cajero automatico, sin embargo tiene dos metodos de pago, puntos 
de fidelidad o con la moneda del juego "Bayas" o en ingles "Bells" */

const villager = "ABD_debug";    /*USARIO Y CONTRASEÑA PRE DEFINIDO */
const password = "1234";
let miles = 8000; 
let bells = 150000;
let authorize = false;
let service;

function logon() {
  /*Funcion de log in con usuario y contraseña de 3 intentos*/

  let attempts = 3;
  while (authorize === false) {
    let userImputName = prompt(
      "Welcome to the ABD terminal \n please provide your username: "
    );
    let userImputPass;
    if (userImputName === villager) {
      while (attempts !== 0) {
        userImputPass = prompt("Please provide a password");
        if (userImputPass === password) {
          alert("Log in Successful");
          authorize = true;
          break;
        } else {
          alert("Password doesnt match the user please try again");
          attempts -= 1;
          console.log(attempts);
        }
      }
      if (attempts === 0) {
        alert(
          "Sorry for security reasons your account is now in lockdown \n please contact nook-inc"
        );
        break; /* break para poder sacar del codigo  ya que puede que le demos infinitas oportunidades
                de inicio de session con usuario pero no podemos darle multiples con contraseña*/
      }
    } else {
      alert("User not found ,please try again");
    }
  }
}
/*Por alguna razon no me colapsa en el visual estudio ////////////////////////////////////////////////////// */
function nookMiles() {
  let product = "";
  let yesOrno = "";
  while (product != "4") {
    product = prompt(
      "Welcome to the nook mileage \nYour current balance is :" +
        miles +
        " miles. " +
        "\nThe following products are available for reedeming \n1 Traveling ticket 300 miles \n2 DIY workbench recipe 200 miles \n3 nifty sunhat 3000 miles" +
        "\n4 main menu" +
        "\n Please select from the options avobe"
    );
    switch (product) {
      case "1":
        yesOrno = prompt("Reedem traveling ticket for 300 miles? (y/n)");
        if (yesOrno === "y" || yesOrno === "Y") {
          if (miles < 300) {
            alert("Sorry not enought miles");
            break;
          } else {
            miles -= 300;
            alert("Thank you for your purchase, your balance is " + miles);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
      case "2":
        yesOrno = prompt("Reedem DIY workbench recipe 200 miles? (y/n)");
        if (yesOrno === "y" || yesOrno === "Y") {
          if (miles < 200) {
            alert("Sorry not enought miles");
            break;
          } else {
            miles -= 200;
            alert("Thank you for your purchase, your balance is " + miles);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
      case "3":
        yesOrno = prompt("Reedem nifty sunhat 3000 miles? (y/n)");
        if (yesOrno === "y" || yesOrno === "Y") {
          if (miles < 3000) {
            alert("Sorry not enought miles");
            break;
          } else {
            miles -= 3000;
            alert("Thank you for your purchase, your balance is " + miles);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
    }
  }
  return miles;
}
/*Por alguna razon no me colapsa en el visual estudio ////////////////////////////////////////////////////// 
misma funcion pero con monedas normales*/
function shopping() {
  let product = "";
  let yesOrno = "";
  while (product != "4") {
    product = prompt(
      "Welcome to the nook Shop  \nYour current balance is :" +
        bells +
        " bells. " +
        "\nThe following products are available for purchase \n1 Swimming suit 1500 bells \n2 Expert toolkit 2500 bells \n3 commemorative Nook inc Flag 3000 bells" +
        "\n4 main menu" +
        "\n Please select from the options avobe"
    );
    switch (product) {
      case "1":
        yesOrno = prompt("Purchase Swimming suit 1500 bells ? (y/n)");
        if (yesOrno === "y" || yesOrno === "Y") {
          if (bells < 1500) {
            alert("Sorry not enought bells");
            break;
          } else {
            bells -= 300;
            alert("Thank you for your purchase, your balance is " + bells);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
      case "2":
        yesOrno = prompt("Purchase Expert toolkit 2500 bells? (y/n)");
        if (yesOrno === "y" || yesOrno === "Y") {
          if (bells < 2500) {
            alert("Sorry not enought bells");
            break;
          } else {
            bells -= 2500;
            alert("Thank you for your purchase, your balance is " + bells);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
      case "3":
        yesOrno = prompt(
          "Purchase commemorative Nook inc Flag 3000 bells? (y/n)"
        );
        if (yesOrno === "y" || yesOrno === "Y") {
          if (bells < 3000) {
            alert("Sorry not enought bells");
            break;
          } else {
            bells -= 3000;
            alert("Thank you for your purchase, your balance is " + bells);
            break;
          }
        } else if (yesOrno === "n" || yesOrno === "N") {
          break;
        } else {
          alert("invalid input please try again");
        }
    }
  }
  return bells;
}

/*//////////////////////////////////////////// funciones de un cajero normal 
aseguramos que el codigo no acepte valores negativos ni que se retire mas de lo que esta en el banco */
function withdrawl() {
  let yesorno = prompt(
    "Your current balance is :" +
      bells +
      "\nDo you wish to withdrawl some bells? (y/n)"
  );
  let isDone = "n";
  let withdrawl;
  if (yesorno === "y" || yesorno === "Y") {
    while (isDone !== "n" || isDone !== "y") {
      withdrawl = parseInt(prompt("How many bells ?"));
      if (withdrawl > bells) {
        alert("Sorry not enough bells");
        break;
      } else if (withdrawl < 0) {
        alert("Invalid Amount");
        break;
      }
      isDone = prompt("Are you sure (y/n)");
      bells -= withdrawl;
      alert("Your new balance is " + bells);
      break;
    }
  } else if (yesorno === "n" || yesorno === "N") {
  } else {
    alert("invalid input, please try again");
  }
  return bells;
}
/**/ //////////////////////////////////////////// */
function deposit() {
  let yesorno = prompt(
    "Your current balance is :" +
      bells +
      "\nDo you wish to deposit some bells? (y/n)"
  );
  let isDone = "n";
  let deposit;
  if (yesorno === "y" || yesorno === "Y") {
    while (isDone !== "n" || isDone !== "y") {
      deposit= parseInt(prompt("How many bells ?"));
      if (deposit < 0) {
        alert("Invalid Amount");
        break;
      }
      isDone = prompt("Are you sure (y/n)");
      bells += deposit;
      alert("Your new balance is " + bells);
      break;
    }
  } else if (yesorno === "n" || yesorno === "N") {
  } else {
    alert("invalid input, please try again");
  }
  return bells;
}
/**/////////////////////////////////////////////////////////////// */

logon()/*invocar a la funcion que nos diga si autoriza el inicio de session o no, cambiando entonces lo que vamos  a mostrar dentro del body */
if (authorize === true) {
  let link = document.createElement("LogIn");
  document.getElementsByTagName("HEAD")[0].appendChild(link);
  document.getElementById("LogIn").innerHTML =
    '<p class="paragraph">Thank you for your patronage </p>';
} else {
  document.getElementById("LogIn").innerHTML =
    '<p class="paragraph">We are sorry, please reload the page </p>';
}

while (authorize === true && service != "x" && service != "X") {
  service = prompt(
    "Please  select from the following services \n1 Reedeem Nook Miles \n2 Nook shooping \n3 Withdrawl Bells\n4 Deposit Bells \nx End Session"
  );
  switch (service) {
    case "1":
      nookMiles(miles);
      console.log(miles);
      break;
    case "2":
      shopping();
      console.log(bells);
      break;
    case "3":
      withdrawl();
      console.log(bells);
      break;
    case "4":
      deposit();
      console.log(bells);
      break;
  }
  console.log("Yep im still here ");
}

alert("Logging off....");
