'use client'

import styled from 'styled-components'
import { handleMenuParams } from '@/utils/common'
import { colors } from '@/utils/constant'

const StockDiv = styled.div`
    font-size: ${props => props.head ? '25px' : '20px'};
    font-weight: ${props => props.head ? 'bold' : 'normal'};;
    margin-bottom: 5px;
    color: ${props => props.head ? 'white' : 'black'};
    padding: ${props => props.head ? '10px' : '0'};
    width: 100%;
    display: flex;
    flex-direction: row;
    /* border: 1px solid gray; */
    background-color: ${props => props.backgroundcolor};
    border-radius: ${props => props.head ? '4px' : '0'};

    .col {
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .name {}
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

const StockCardDiv = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin-right: 5px;
    margin-bottom: 5px;
    color: black;
    padding: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid gray;
    background-color: ${props => props.backgroundcolor};
    border-radius: 4px;
    float: left;

    .col {
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
    }

    .name {
        line-height: 50px;
        font-size: 25px;
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: center;

        &:hover {
            overflow: visible; 
            white-space: nowrap; 
            height: auto;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            z-index: 100;
            cursor: pointer;
        }
    }
`

const getSubBackgroundColor = (preId, subId = 0)=>{
    const colorsLen = colors?.length || 0

    if(colorsLen > 0){
        if(subId === 0){
            return colors[preId]
        } else {    
            if(colorsLen >= subId){
                return colors[colors?.length - subId]
            } else {
                return colors[0]
            }
        }
    } else {
        return 'white'
    }
}

const getBackgroundColor = (params, index = -1, isCard = false)=>{
    const { id = '' } = params

    if(id === ''){
        return 'white'
    }

    if(index === -1){
        return 'black'
    }

    const { preId, subId } = handleMenuParams(id)
    // console.log('getBackgroundColor', params, preId, subId)

    if(index !== -1 && index % 2 === 0){
        if(!isCard){
            return 'white'
        } else {
            return 'orange'
        }
    }

    return getSubBackgroundColor(preId, subId)
}

const Stock = ({ params, item, index }) => {
    const { name, symbol, current, percent, followers } = item

    return (
        <StockDiv backgroundcolor={getBackgroundColor(params, index)}>
            <div className='col name'>{name}</div>
            <div className='col symbol'>{symbol}</div>
            <div className='col current'>{current}</div>
            <div className='col percent'>{percent}</div>
            <div className='col followers'>{followers}</div>
        </StockDiv>
    )
}

export const StockHead = ({ params })=>{
    return (
        <StockDiv backgroundcolor={getBackgroundColor(params)} head={true}>
            <div className='col name'>{'名称'}</div>
            <div className='col symbol'>{'代码'}</div>
            <div className='col current'>{'当前价'}</div>
            <div className='col percent'>{'涨幅'}</div>
            <div className='col followers'>{'关注者'}</div>
        </StockDiv>
    )
}

export const StockCard = ({ params, item, index }) => {
    const { name, symbol, current, percent, followers } = item

    return (
        <StockCardDiv backgroundcolor={getBackgroundColor(params, index, true)}>
            <div className='col name'>{name}</div>
            <div className='col symbol'>{symbol}</div>
            <div className='col current'>
                <div className='col-left'>{'当前价: '}</div>
                <div className='col-right'>{current}</div>
            </div>
            <div className='col percent'>
                <div className='col-left'>{'涨幅: '}</div>
                <div className='col-right'>{percent}</div>
            </div>
            <div className='col followers'>
                <div className='col-left'>{'关注者: '}</div>
                <div className='col-right'>{followers}</div>
            </div>
        </StockCardDiv>
    )
}


export default Stock