const btns_menu = document.querySelector('#btns_menu');

const buttons = [
    {
    'value': 'CARDÁPIO',
    'link':'static/docs/menu.pdf'
    },
    {
    'value': 'ENCOMENDAR',
    'link':'https://wa.me/5582988287425?text=ol%C3%A1%2C+desejo+encomendar+um+delicioso+Chocopriccio%21'
    },
    {
        'value': 'INSTAGRAM',
        'link':'https://www.instagram.com/doce.capricciodoceriafit'
        }
]

buttons.map((item)=>{
    btns_menu.innerHTML += `<a href="${item.link}"> ${item.value} </a>`

})