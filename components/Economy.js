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
    const { variety, latestpri, openpri, maxpri, minpri, limit, yespri, totalvol, time } = item

    let backgroundColor = 'pink'
    if(index % 2 === 0){
        backgroundColor = 'white'
    }

    return (
        <EconomyDiv $backgroundColor={backgroundColor}>
            <div className='col variety'>{variety}</div>
            <div className='col latestpri'>{latestpri}</div>
            <div className='col openpri'>{openpri}</div>
            <div className='col maxpri'>{maxpri}</div>
            <div className='col minpri'>{minpri}</div>
            <div className='col limit'>{limit}</div>
            <div className='col yespri'>{yespri}</div>
            <div className='col totalvol'>{totalvol}</div>
            <div className='col time'>{time}</div>
        </EconomyDiv>
    )
}

export const EconomyGoldHead = ({ params })=>{
    const backgroundColor = 'black'

    return (
        <EconomyDiv $backgroundColor={backgroundColor} $head={1}>
            <div className='col variety'>{'品种'}</div>
            <div className='col latestpri'>{'最新价'}</div>
            <div className='col openpri'>{'开盘价'}</div>
            <div className='col maxpri'>{'最高价'}</div>
            <div className='col minpri'>{'最低价'}</div>
            <div className='col limit'>{'涨跌幅'}</div>
            <div className='col yespri'>{'昨收价'}</div>
            <div className='col totalvol'>{'总成交量'}</div>
            <div className='col time'>{'更新时间'}</div>
        </EconomyDiv>
    )
}

export default Economy