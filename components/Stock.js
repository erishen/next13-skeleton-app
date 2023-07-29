'use client'

import styled from 'styled-components'

const Stock = styled.div`
    font-size: ${props => props.head ? '25px' : '20px'};
    font-weight: ${props => props.head ? 'bold' : 'normal'};;
    margin-top: 5px;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    background-color: ${props => props.backgroundColor};

    .col {
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .name {
    }
    .symbol {
        width: 300px;
    }
    .current {
        justify-content: flex-start;
    }
    .percent {
        justify-content: flex-start;
    }
    .followers {
        justify-content: flex-end;
    }
`

const colorArr = [
    'white',
    'red',
    'green',
    'blue',
    'pink',
    'orange'
]

const getSubBackgroundColor = (preId, subId = 0)=>{
    if(subId === 0){
        return colorArr[preId]
    } else {
        return colorArr[colorArr.length - subId]
    }
}

const getBackgroundColor = (params, index = -1)=>{
    const { id = '' } = params

    if(id === ''){
        return 'white'
    }

    let preId = 0
    let subId = 0

    if(id.indexOf('-') !== -1){
        const idArr = id.split('-')
        preId = parseInt(idArr?.[0], 10)
        subId = parseInt(idArr?.[1], 10)
    } else {
        preId = parseInt(id, 10)
    }

    console.log('getBackgroundColor', params, preId, subId)

    if(index !== -1 && index % 2 === 0){
        return 'white'
    }

    return getSubBackgroundColor(preId, subId)
}

const StockComponent = ({ params, item, index }) => {
    const { name, symbol, current, percent, followers } = item

    return (
        <Stock backgroundColor={getBackgroundColor(params, index)}>
            <div className='col name'>{name}</div>
            <div className='col symbol'>{symbol}</div>
            <div className='col current'>{current}</div>
            <div className='col percent'>{percent}</div>
            <div className='col followers'>{followers}</div>
        </Stock>
    )
}

export const StockHead = ({ params })=>{
    return (
        <Stock backgroundColor={getBackgroundColor(params)} head={true}>
            <div className='col name'>{'名称'}</div>
            <div className='col symbol'>{'代码'}</div>
            <div className='col current'>{'当前价'}</div>
            <div className='col percent'>{'涨幅'}</div>
            <div className='col followers'>{'关注者'}</div>
        </Stock>
    )
}

export default StockComponent