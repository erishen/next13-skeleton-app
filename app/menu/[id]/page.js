import '@/styles/page.scss'
import Image from 'next/image'
import Test from '@/components/Test'
import Stock, { StockHead } from '@/components/Stock'
import Left from '@/app/left'

const getData = async ()=>{
  const url = `https://xueqiu.com/service/v5/stock/screener/quote/list?page=1&size=30&order=desc&orderby=percent&order_by=percent&market=CN&type=sh_sz&_=1644586651770` 
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
  const { data } = await getData()
  const { list } = data
  // console.log('list', list)

  return (
    <>
      <Left params={params} />
      <div className='content'>
        <Test>Menu Page {params?.id}</Test>
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
