import '@/styles/page.scss'
import Image from 'next/image'
import Link from 'next/link'
import Left from '@/app/left'
import { handleMenuParams } from '@/utils/common'
import Economy, { EconomyGold, EconomyGoldHead } from '@/components/Economy'
import { subMenus } from '@/utils/constant'

const rapidEconomyUrl = 'https://investing-financial-stocks.p.rapidapi.com/articles/economy?lang=en'
const rapidKey = '281fd95da5mshb358a0378df34dcp1ad7cfjsn66ed289e84b7'
const rapidHost = 'investing-financial-stocks.p.rapidapi.com'

const juheGoldUrl = 'http://web.juhe.cn/finance/gold/shgold' 
const juheFutureUrl = 'http://web.juhe.cn/finance/gold/shfuture'
const juheGoldKey = '3bf37029149d29e6fa696a5ec882bfc9'

export const revalidate = 3600 // revalidate every hour

export async function generateStaticParams() {

  const result = subMenus?.[1]?.map((item, index) => {
    const { text = '' } = item

    if(text !== ''){
      return {
        id: '2-' + (index + 1),
      }
    }
  })

  result.push({
    id: '2'
  })

  return result
}

const getData = async (preId, subId)=>{
  console.log('economy_getData', preId, subId)
  let result = ''

  let url = rapidEconomyUrl
  let options = {
    method: 'GET'
  }

  switch(subId){
    case 0:
    case 1:
      options.headers = {
        'X-RapidAPI-Key': rapidKey,
        'X-RapidAPI-Host': rapidHost
      }
      break
    case 2:
      url = juheGoldUrl + '?v=1&key=' + juheGoldKey
      break
    case 3:
      url = juheFutureUrl + '?v=1&key=' + juheGoldKey
      break
  }
  console.log('url', url)

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    result = await response.json()
    // console.log('getData_result', result)
  } catch (error) {
    console.error('economy_getData_error', error)
  }             

  // console.log('economy_result', preId, subId, result.length)
  return result
}

export default async function Page({ params }) {
  // console.log('menu_page_params', params)
  const { id = '' } = params
  const { preId = 0, subId = 0 } = handleMenuParams(id)

  let pageData = []
  const { data = [], result = [] } = await getData(preId, subId)

  let isGoldFlag = false
  if(subId === 2 || subId === 3){
    isGoldFlag = true
  }

  pageData = data
  if(isGoldFlag){
    const firstObj = result?.[0]
    Object.keys(firstObj).forEach((key, index)=>{
      pageData.push(firstObj?.[key])
    })
  }

  return (
    <>
      <Left params={params} />
      <div className='page-content'>
        {isGoldFlag && <EconomyGoldHead key={'economy-gold-head'} params={params} />}

        {pageData.map((item, index)=>{
          // if(index === 0)
          //   console.log('item', item)

            if(isGoldFlag){
              return (
                <EconomyGold key={'economy-gold' + index} params={params} item={item} index={index} />
              )
            } else {
              return (
                <Economy key={'economy' + index} params={params} item={item} />
              )
            }
        })}
      </div>
    </>
  )
}
