const link = document.querySelector('a')
console.log(link)
link.textContent='all-spares';
link.href='http://all-spares.com'
const sect = document.querySelector('section'); //знайшли елемент
const para = document.createElement('p');// створили новий елемент
para.textContent='some text' ; //записали текст але ми маємо його спеціально приєднати до потрібного місці у дереві

sect.appendChild(para) ;

for (i = 1; i <= 5 ; i++){
    const para = document.createElement('p');
    para.textContent = i +' : new text' ;
    para.classList.add('highlight');//до зміної параграфів у список класів додаємо новий клас
    sect.appendChild(para);
}

const text = document.createTextNode('-a lot of different text or some articles');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara.cloneNode(true));

//clock
const clock = document.querySelector('.clock');
setInterval( ()=> clock.innerText = (new Date()).toLocaleTimeString() ,   1000 );
//setInterval( () => $('.clock').html((new Date()).toLocaleTimeString()), 1000);

// clock use jquery
setInterval( ()=> $('.clockj').html (new Date()).toLocaleTimeString() ,   1000 );

// calculator
const display = document.querySelector('.display');
const digitsOpers = document.querySelectorAll('.digits button, .operations button'); //вибрали всы кнопки з класом digits
digitsOpers.forEach(digit => digit.addEventListener('click' ,digitOperPressed ));
// e-це подія
function digitOperPressed(e) {
  e.preventDefault();   //preventDefault не дає відправку форми
 display.value += e.target.innerText;
}
//ця частина для дорівнюю
const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e){
    e.preventDefault();
    display.value = eval(display.value);
}







