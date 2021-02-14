let cheese = 0;

let multiplier = 1

let automult = 0

let items = {
    pickAxes: {
        price: 50,
        quantity: 0,
        multiplier: 2,
    },
    jackHammer: {
        price: 100,
        quantity: 0,
        multiplier: 4,
    },
    digBoi: {
        price: 200,
        quantity: 0,
        multiplier: 10,
    }
}

let automaticUpgrades = {
    mice: {
        price: 0,
        quantity: 1,
        cheese: 5,
    }
};



function mine() {
    cheese += 1 * multiplier
    drawCheese()

}

function buyPickaxe() {
    if (cheese >= items.pickAxes.price) {
        cheese -= items.pickAxes.price
        items.pickAxes.quantity++
        equipPickaxe()
        update()
    }
}

function buyJackhammer() {
    if (cheese >= items.jackHammer.price) {
        cheese -= items.jackHammer.price
        items.jackHammer.quantity++
        equipJackhammer()
        update()
    }
}

function buyDigboi() {
    if (cheese >= items.digBoi.price) {
        cheese -= items.digBoi.price
        items.digBoi.quantity++
        equipDigboi()
        update()
    }
}

function drawCheese() {
    document.getElementById("moonImg").innerText = cheese.toString()
}

function update() {
    document.getElementById("moonImg").innerText = cheese.toString()
}

function equipPickaxe() {
    let pickAxecount = document.getElementById("pickAxesequipped")
    pickAxecount.innerText = `${items.pickAxes.quantity}`
    multiplier += items.pickAxes.multiplier

}

function equipJackhammer() {
    let Jackhammercount = document.getElementById("jackHammersequipped")
    Jackhammercount.innerText = `${items.jackHammer.quantity}`
    multiplier += items.jackHammer.multiplier

}

function equipDigboi() {
    let Digboicount = document.getElementById("digBoisequipped")
    Digboicount.innerText = `${items.digBoi.quantity}`
    multiplier += items.digBoi.multiplier

}

function equipMice() {
    let Micecount = document.getElementById("miceEquipped")
    Micecount.innerText = `${automaticUpgrades.mice.quantity}`
    cheese += automaticUpgrades.mice.cheese * automaticUpgrades.mice.quantity

}

function collectAutoUpgrades() {
    // if (cheese >= automaticUpgrades.mice.price) {
    //     cheese -= automaticUpgrades.mice.price
    //     automaticUpgrades.mice.quantity++
    // }

    cheese += automult
    // drawCheese()
    equipMice()
    update()
}

function startInterval() {
    setInterval(collectAutoUpgrades, 3000);
    // update()
}

drawCheese()
startInterval()
update()