import '@/styles/page.scss'
import Image from 'next/image'
import Stock, { StockHead, StockCard } from '@/components/Stock'
import Left from '@/app/left'
import { handleMenuParams } from '@/utils/common'

export const revalidate = 3600 // revalidate every hour

const getData = async (preId, subId )=>{
  console.log('getData', preId, subId)

  let market = 'CN'
  let type = 'sh_sz'
  let page = 1
  let size = (subId < 4) ? 100 : 150
  let order = 'desc'
  let orderby = 'percent'

  if(preId === 1){
    switch(subId){
      case 2:
      case 5:
        market = 'HK'
        type = 'hk'
        break
      case 3:
      case 6:
        market = 'US'
        type = 'us'
        break
    }
  }

  const url = `https://xueqiu.com/service/v5/stock/screener/quote/list?page=${page}&size=${size}&order=${order}&order_by=${orderby}&market=${market}&type=${type}&_=1644586651770` 
  console.log('url', url)

  const res = await fetch(url, {
    // next: { revalidate: 10 } 
  })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }) {
  const { id = '' } = params
  const { preId = 0, subId = 0 } = handleMenuParams(id)

  const { data } = await getData(preId, subId)
  const { list } = data
  // console.log('list', list)

  const isDisplayCardFlag = (subId < 4) ? false : true

  return (
    <>
      <Left params={params} />
      <div className='page-content'>
        {!isDisplayCardFlag && <StockHead params={params} />}
        {
          list.map((item, index)=>{
            // if(index === 0)
            //   console.log('item', item)

            return (
              <>
                {!isDisplayCardFlag ? 
                  <Stock key={'item' + index} params={params} index={index} item={item} /> : 
                  <StockCard key={'item' + index} params={params} index={index} item={item} />}
              </>
            )
          })
        }
      </div>
    </>
  )
}
