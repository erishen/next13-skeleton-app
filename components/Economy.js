'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { handleMenuParams } from '@/utils/common'
import { colors } from '@/utils/constant'

const EconomyDiv = styled.div`
    font-size: ${props => props.$head ? '25px' : '20px'};
    font-weight: ${props => props.$head ? 'bold' : 'normal'};
    color: ${props => props.$head ? 'white' : 'black'};
    padding: ${props => props.$head ? '10px' : '0'};
    border-radius: ${props => props.$head ? '4px' : '0'};
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.$backgroundColor};

    .img-area {
        width: 150px;
        height: 120px;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
        cursor: pointer;
        /* border: 1px solid red; */

        .title {
            font-size: 20px;
            font-weight: bold;
        }
        .description {}
        .date {
            width: 100%;
            text-align: right;
        }
    }

    .gold-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        .col {
            width: 100px;
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }

        .variety {
            justify-content: center;
        }

        .totalvol {
            width: 150px;
        }

        .time {
            width: 250px;
            justify-content: center;
        }
    }

    .future-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;

        .col {
            width: 90px;
            height: 50px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }

        .name {
            width: 100px;
            justify-content: center;
        }

        .change {
            justify-content: center;
        }
        .buyvol {
            justify-content: center;
        }
        .sellvol {
            justify-content: center;
        }

        .time {
            width: 250px;
            justify-content: center;
        }
    }
`

const Economy = ({ params, item }) => {
    const { href, image, title, description, date } = item

    const jumpPage = (href)=>{
        if(typeof window !== 'undefined'){
            window.open(href, '_blank')
        }
    }

    let dateStr = date
    if(date.indexOf('-') !== -1){
        const dateArr = date.split('-')
        dateStr = dateArr?.[1]
    }

    return (
        <EconomyDiv>
            {/*<Image src={image} width="300" height="300" alt={title} />*/}
            <div className='img-area'>
                <img src={image} alt={title} width="150" height="100" />
            </div>
            <div className='content' onClick={()=>jumpPage(href)}>
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
                <div className='date'>{dateStr}</div>
            </div>
        </EconomyDiv>
    )
}

export const EconomyGold = ({ params, item, index })=>{
    const { id = '' } = params
    const { preId, subId } = handleMenuParams(id)

    let backgroundColor = 'pink'
    
    if(subId === 3){
        backgroundColor = 'orange'
    }

    if(index % 2 === 0){
        backgroundColor = 'white'
    }

    if(subId === 2){
        const { variety, latestpri, openpri, maxpri, minpri, limit, yespri, totalvol, time } = item

        return (
            <EconomyDiv $backgroundColor={backgroundColor}>
                <div className='gold-wrapper'>
                    <div className='col variety'>{variety}</div>
                    <div className='col latestpri'>{latestpri}</div>
                    <div className='col openpri'>{openpri}</div>
                    <div className='col maxpri'>{maxpri}</div>
                    <div className='col minpri'>{minpri}</div>
                    <div className='col limit'>{limit}</div>
                    <div className='col yespri'>{yespri}</div>
                    <div className='col totalvol'>{totalvol}</div>
                    <div className='col time'>{time}</div>
                </div>
            </EconomyDiv>
        )
    } else if(subId === 3){
        const { name, latestpri, change, buypri, buyvol, sellpri, sellvol, tradvol, open, 
            lastclear, maxpri, minpri, position, zengcang, time } = item
        
        return (
            <EconomyDiv $backgroundColor={backgroundColor}>
                <div className='future-wrapper'>
                    <div className='col name'>{name}</div>
                    <div className='col latestpri'>{latestpri}</div>
                    <div className='col change'>{change}</div>
                    <div className='col buypri'>{buypri}</div>
                    <div className='col buyvol'>{buyvol}</div>
                    <div className='col sellpri'>{sellpri}</div>
                    <div className='col sellvol'>{sellvol}</div>
                    <div className='col tradvol'>{tradvol}</div>
                    {/*<div className='col open'>{open}</div>
                    <div className='col lastclear'>{lastclear}</div>
                    <div className='col zengcang'>{zengcang}</div>
                    <div className='col maxpri'>{maxpri}</div>
                    <div className='col minpri'>{minpri}</div>*/}
                    <div className='col position'>{position}</div>
                    <div className='col time'>{time}</div>
                </div>
            </EconomyDiv>
        )
    }

    return null
}

export const EconomyGoldHead = ({ params })=>{
    const { id = '' } = params
    const { preId, subId } = handleMenuParams(id)

    const backgroundColor = 'black'

    if(subId === 2){
        return (
            <EconomyDiv $backgroundColor={backgroundColor} $head={1}>
                <div className='gold-wrapper'>
                    <div className='col variety'>{'品种'}</div>
                    <div className='col latestpri'>{'最新价'}</div>
                    <div className='col openpri'>{'开盘价'}</div>
                    <div className='col maxpri'>{'最高价'}</div>
                    <div className='col minpri'>{'最低价'}</div>
                    <div className='col limit'>{'涨跌幅'}</div>
                    <div className='col yespri'>{'昨收价'}</div>
                    <div className='col totalvol'>{'总成交量'}</div>
                    <div className='col time'>{'更新时间'}</div>
                </div>
            </EconomyDiv>
        )
    } else if(subId === 3){
        return (
            <EconomyDiv $backgroundColor={backgroundColor} $head={1}>
                <div className='future-wrapper'>
                    <div className='col name'>{'名称'}</div>
                    <div className='col latestpri'>{'最新价'}</div>
                    <div className='col change'>{'涨跌'}</div>
                    <div className='col buypri'>{'买价'}</div>
                    <div className='col buyvol'>{'买量'}</div>
                    <div className='col sellpri'>{'卖价'}</div>
                    <div className='col sellvol'>{'卖量'}</div>
                    <div className='col tradvol'>{'成交量'}</div>
                    {/*<div className='col open'>{'今开盘'}</div>
                    <div className='col lastclear'>{'昨结算'}</div>
                    <div className='col zengcang'>{'增仓'}</div>
                    <div className='col maxpri'>{'最高价'}</div>
                    <div className='col minpri'>{'最低价'}</div>*/}
                    <div className='col position'>{'持仓量'}</div>
                    <div className='col time'>{'更新时间'}</div>
                </div>
            </EconomyDiv>
        )
    }

    return null
}

export default Economy