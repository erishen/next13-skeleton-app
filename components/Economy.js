'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { handleMenuParams } from '@/utils/common'
import { colors } from '@/utils/constant'

const EconomyDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;

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
`

const Economy = ({ params, item, index }) => {
    const { href, image, title, description, date } = item

    const jumpPage = (href)=>{
        if(typeof window !== 'undefined'){
            window.open(href, '_blank')
        }
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
                <div className='date'>{date}</div>
            </div>
        </EconomyDiv>
    )
}

export default Economy