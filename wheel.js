import {Wheel} from 'https://cdn.jsdelivr.net/npm/spin-wheel@5.0.2/dist/spin-wheel-esm.js';


//     Conf     //

const item = 3

// //////////// //

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

const props = {
    items: [
        {
            label: 'Iso Britannia, 1911',
        },
        {
            label: 'Knöpö (Suomi), 1976',
        },
        {
            label: 'Myllyjärvi, 2025',
        },
        {
            label: 'Villi Länsi, 1802',
        },
        {
            label: 'Kouvola, 1999',
        },
        {
            label: 'Japani, 1960',
        },
        {
            label: 'Kreikka, 1896',
        },
        {
            label: 'Sektori fu7ur3, 2080'
        }
    ]
}

// 2. Decide where you want it to go:
const container = document.querySelector('main');
// 3. Create the wheel in the container and initialise it with the props:
const wheel = new Wheel(container, props);
wheel.isInteractive = false
wheel.borderColor = "#BBE6FB"
wheel.borderWidth = 3
wheel.lineColor = "#BBE6FB"
wheel.lineWidth = 3
wheel.itemBackgroundColors = ["#112A57", "#447EBC"]
wheel.itemLabelColors = ["#BBE6FB"]
const body = document.querySelector('body')

body.onkeydown = function(){
    wheel.spinToItem(
        item,                                       // Item
        3000 + Math.floor(Math.random() * 2000),    // Time (ms)
        true,                                       // Magic
        Math.floor((Math.random() * 6) + 2),        // Rounds
        1,                                          // Direction
        easeOutExpo                                 // Easing
    )
}
