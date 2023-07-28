const getMenuText = (index)=>{
    switch(index){
        case 1:
            return '语文'
        case 2:
            return '数学'
        case 3: 
            return '英语'
        case 4: 
            return '地理'
        case 5:
            return '历史'
    }
}

const getSubMenu1 = (subIndex) => {
    switch(subIndex){
        case 1:
            return '古诗'
        case 2:
            return '基础'
        case 3: 
            return '阅读'
        case 4: 
            return '写作'
        case 5:
            return '心得'
    }
}

const getSubMenu2 = (subIndex) => {
    switch(subIndex){
        case 1:
            return '基础'
        case 2:
            return '计算'
        case 3: 
            return '阅读'
        case 4: 
            return '写作'
        case 5:
            return '心得'
    }
}


const getSubMenu3 = (subIndex) => {
    switch(subIndex){
        case 1:
            return '古诗'
        case 2:
            return '基础'
        case 3: 
            return '阅读'
        case 4: 
            return '写作'
        case 5:
            return '心得'
    }
}


const getSubMenu4 = (subIndex) => {
    switch(subIndex){
        case 1:
            return '古诗'
        case 2:
            return '基础'
        case 3: 
            return '阅读'
        case 4: 
            return '写作'
        case 5:
            return '心得'
    }
}


const getSubMenu5 = (subIndex) => {
    switch(subIndex){
        case 1:
            return '古诗'
        case 2:
            return '基础'
        case 3: 
            return '阅读'
        case 4: 
            return '写作'
        case 5:
            return '心得'
    }
}

const getSubMenuText = (index, subIndex)=>{
    let subText = ''
    switch(index){
        case 1:
            subText = getSubMenu1(subIndex)
        case 2:
            subText = getSubMenu2(subIndex)
        case 3: 
            subText = getSubMenu3(subIndex)
        case 4: 
            subText = getSubMenu4(subIndex)
        case 5:
            subText = getSubMenu5(subIndex)
    }
    return getMenuText(index) + ' - ' + subText
}

const homePri = {
    href: '/',
    text: '学生'
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

export const home = homePri
export const menus = menusPri
export const subMenus = subMenusPri
export const footers = footersPri
export const contents = contentsPri
