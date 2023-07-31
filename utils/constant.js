const homePri = {
    href: '/',
    text: '首页'
}

const getMenuText = (index)=>{
    switch(index){
        case 1:
            return '股票'
        case 2:
            return '经济'
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
                return '沪深卡片'
            case 5:
                return '港股卡片'
            case 6:
                return '美股卡片'
        }
    } else if(index === 2){
        switch(subIndex){
            case 1:
                return '财情'
            case 2:
                return '黄金'
            case 3:
                return '期货'
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

    if(subText !== ''){
        return getMenuText(index) + ' - ' + subText
    } else {
        return ''
    }
}

const menusPri = []
const subMenusPri = {}
const footersPri = []
const contentsPri = []

let index = 0
let subIndex = 0

const menuLen = 5
const subMenuLen = 6
const footerLen = 10
const contentsLen = 20

// 手动添加 stock
menusPri.push({
    href: '/stock/1',
    text: getMenuText(1)
})

subMenusPri[0] = []
for(let j = 0; j < subMenuLen; j++){
    subIndex = j + 1
    subMenusPri[0].push({
        href: '/stock/1-' + subIndex,
        text: getSubMenuText(1, subIndex)
    })
}

// 手动添加 economy
menusPri.push({
    href: '/economy/2',
    text: getMenuText(2)
})

subMenusPri[1] = []
for(let j = 0; j < subMenuLen; j++){
    subIndex = j + 1
    subMenusPri[1].push({
        href: '/economy/2-' + subIndex,
        text: getSubMenuText(2, subIndex)
    })
}

// menu
for(let i = 2; i < menuLen; i++){
    index = i + 1
    menusPri.push({
        href: '/menu/' + index,
        text: getMenuText(index)
    })
    
    subMenusPri[i] = []
    for(let j = 0; j < subMenuLen; j++){
        subIndex = j + 1
        subMenusPri[i].push({
            href: '/menu/' + index + '-' + subIndex,
            text: getSubMenuText(index, subIndex)
        })
    }
}

// footer
for(let i = 0; i < footerLen; i++){
    index = i + 1
    footersPri.push({
        href: '/footer/' + index,
        text: 'footer' + index
    })
}

// content
for(let i = 0; i < contentsLen; i++){
    index = i + 1
    contentsPri.push({
        tag: 'p',
        text: 'welcome to my site ' + index
    })
}

const colorsPri = [
    'white',
    'deeppink',
    'burlywood',
    'red',
    'pink',
    'orange',
    'orangered'
]

export const home = homePri
export const menus = menusPri
export const subMenus = subMenusPri
export const footers = footersPri
export const contents = contentsPri
export const colors = colorsPri
