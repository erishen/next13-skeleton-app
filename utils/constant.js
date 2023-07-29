const homePri = {
    href: '/',
    text: '首页'
}

const getMenuText = (index)=>{
    switch(index){
        case 1:
            return '股票'
        case 2:
            return ''
        case 3: 
            return ''
        case 4: 
            return ''
        case 5:
            return ''
    }
}

const getSubMenu = (index, subIndex) => {
    if(index === 1){
        switch(subIndex){
            case 1:
                return '沪深'
            case 2:
                return '港股'
            case 3: 
                return '美股'
            case 4: 
                return subIndex
            case 5:
                return subIndex
        }
    }
    return ''
}

const getSubMenuText = (index, subIndex)=>{
    let subText = ''
    switch(index){
        case 1:
            subText = getSubMenu(index, subIndex)
            break
        case 2:
            subText = getSubMenu(index, subIndex)
            break
        case 3: 
            subText = getSubMenu(index, subIndex)
            break
        case 4: 
            subText = getSubMenu(index, subIndex)
            break
        case 5:
            subText = getSubMenu(index, subIndex)
            break
    }
    return getMenuText(index) + ' - ' + subText
}

const menusPri = []
const subMenusPri = {}
const footersPri = []
const contentsPri = []

let index = 0
let subIndex = 0

for(let i = 0; i < 5; i++){
    index = i + 1
    menusPri.push({
        href: '/menu/' + index,
        text: getMenuText(index)
    })

    footersPri.push({
        href: '/footer/' + index,
        text: 'footer' + index
    })

    subMenusPri[i] = []
    for(let j = 0; j < 5; j++){
        subIndex = j + 1
        subMenusPri[i].push({
            href: '/menu/' + index + '-' + subIndex,
            text: getSubMenuText(index, subIndex)
        })
    }
}

for(let i = 0; i < 100; i++){
    index = i + 1
    contentsPri.push({
        tag: 'p',
        text: 'welcome to my site ' + index
    })
}

const colorsPri = [
    'white',
    'green',
    'blue',
    'red',
    'pink',
    'orange'
]

export const home = homePri
export const menus = menusPri
export const subMenus = subMenusPri
export const footers = footersPri
export const contents = contentsPri
export const colors = colorsPri
