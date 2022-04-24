/* global variables */
header = document.querySelector('header')
let headerItems = header.querySelectorAll('.dropdown li.dropbtn');
let headerAllItems = header.querySelectorAll('.dropdown, .menu-buttons')
let footerEle = document.querySelector('footer');
let fragment = new DocumentFragment();
const smallMenuSign = header.querySelector('.smallMenu');
let hamburgerSign = smallMenuSign.querySelector('img');

/* main functions */
//add menu elements in the footer dynamically
// ( function () {
//     for(b of headerItems){
//         console.log(b);
//         let child = b.parentElement.lastElementChild;
//         let newUlElement = document.createElement(b.parentElement.tagName);
//         let mainLiElement = b.cloneNode(true);
//         newUlElement.appendChild(mainLiElement);
//         let items = child.querySelectorAll('.dropdown-content li');
//         for(i of items){
//             let newLiElement = i.cloneNode(true);
//             newUlElement.appendChild(newLiElement);
//         }
//         fragment.appendChild(newUlElement);
//     }
//     footerEle.append(fragment);
    
// } ());

/* helper functions */
//create a small menue for mobile & tablet on hamburger icon click & delete on close icon click
function showSmallMenu(){
    //console.log('menu clicked');
    let newDiv = document.createElement('div');
    if(hamburgerSign.getAttribute('src') === './assets/icon-hamburger.svg') {
        hamburgerSign.setAttribute('src', './assets/icon-close.svg');
        newDiv.classList.add('smallMenuContent', 'show');
        for(ul of headerAllItems){
            let newUl = ul.cloneNode(true);
            //console.log(newUl === ul);
            //console.log(newUl);
            newDiv.appendChild(newUl);
        }
        header.appendChild(newDiv);
    }
    else{
        hamburgerSign.setAttribute('src', './assets/icon-hamburger.svg');
        document.querySelector('.smallMenuContent').remove();
    }
    /*smallMenuSign.classList.add('show');*/
}

//mobile menu icon on click creation
hamburgerSign.addEventListener('click', showSmallMenu);


const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=fff7d29665e8627f5af612d4dbccbec9&units=imperial';
// zipCode = document.querySelector('#zip').value;
const zipCode = 94040;
let data;
const getWeatherData = async ()=> {
    console.log(baseUrl+zipCode+apiKey);
    const res = await fetch(baseUrl+zipCode+apiKey);
    try {
        data = await res.json();
        if(data.main.temp){

            console.log('client Temp - Data from Weather API', data.main.temp);
            console.log('client Temp - Data from Weather API', data.main.humidity);
            console.log('client Wind - Data from Weather API', data.wind);
            document.getElementById('temp').innerText = `Temprature: ${data.main.humidity}`
            document.getElementById('humidity').innerText = `Humidity: ${data.main.temp}`
            document.getElementById('wind').innerText = `Wind: speed (${data.wind.speed}) degree (${data.wind.deg})`
        }
    } catch(err){
        console.log("Error: ", err);
    }
}

getWeatherData();

