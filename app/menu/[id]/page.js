import '@/styles/page.scss'
import Image from 'next/image'
import Stock, { StockHead } from '@/components/Stock'
import Left from '@/app/left'
import { handleMenuParams } from '@/utils/common'

const getData = async (params)=>{
  const { id = '' } = params
  const { preId, subId } = handleMenuParams(id)

  console.log('getData', id, preId, subId)

  let market = 'CN'
  let type = 'sh_sz'
  let page = 1
  let size = 1000
  let order = 'desc'
  let orderby = 'percent'

  if(preId === 1){
    switch(subId){
      case 2:
        market = 'HK'
        type = 'hk'
        break
      case 3:
        market = 'US'
        type = 'us'
        break
    }
  }

  const url = `https://xueqiu.com/service/v5/stock/screener/quote/list?page=${page}&size=${size}&order=${order}&order_by=${orderby}&market=${market}&type=${type}&_=1644586651770` 
  console.log('url', url)

  const res = await fetch(url, {
    next: { revalidate: 10 } 
  })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }) {
  console.log('menu_page_params', params)
  const { data } = await getData(params)
  const { list } = data
  // console.log('list', list)

  return (
    <>
      <Left params={params} />
      <div className='content'>
        <StockHead params={params} />
        {
          list.map((item, index)=>{
            if(index === 0)
              console.log('item', item)

            const { name, symbol, current, percent } = item
            return (
              <div key={'item' + index}>
                <Stock params={params} index={index} item={item} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
