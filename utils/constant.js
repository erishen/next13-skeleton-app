const menusPri = []
const footersPri = []
const contentsPri = []

let index = 0

for(let i = 0; i < 5; i++){
    index = i + 1
    menusPri.push({
        href: '/menu' + index,
        text: 'menu' + index
    })

    footersPri.push({
        href: '/footer' + index,
        text: 'footer' + index
    })
}

for(let i = 0; i < 100; i++){
    index = i + 1
    contentsPri.push({
        tag: 'h1',
        text: 'welcome to my site ' + index
    })
}

export const menus = menusPri
export const footers = footersPri
export const contents = contentsPri
