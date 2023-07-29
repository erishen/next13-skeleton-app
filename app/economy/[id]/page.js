import '@/styles/page.scss'
import Image from 'next/image'
import Link from 'next/link'
import Left from '@/app/left'
import { handleMenuParams } from '@/utils/common'

const getData = async (preId, subId )=>{
  console.log('getData', preId, subId)
  let result = ''

  const url = 'https://investing-financial-stocks.p.rapidapi.com/articles/economy?lang=en'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '281fd95da5mshb358a0378df34dcp1ad7cfjsn66ed289e84b7',
      'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    result = await response.json()
    // console.log('getData_result', result)
  } catch (error) {
    console.error('getData_error', error)
  }             

  return result
}

export default async function Page({ params }) {
  console.log('menu_page_params', params)
  const { id = '' } = params
  const { preId = 0, subId = 0 } = handleMenuParams(id)

  const { data } = await getData(preId, subId)

  return (
    <>
      <Left params={params} />
      <div className='page-content'>
        {data.map((item, index)=>{
          if(index === 0)
            console.log('item', item)

          const { title, href } = item

          return (
            <Link href={href} className='link' key={'menu' + index}>{title}</Link>
          )
        })}
      </div>
    </>
  )
}
