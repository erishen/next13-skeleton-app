import '@/styles/page.scss'
import Image from 'next/image'
import Test from '@/components/Test'
// import dynamic from 'next/dynamic'
// const Test = dynamic(()=>import('@/components/Test'), { ssr: true })
import { contents } from '@/utils/constant'
import Left from './left'
 
export default function Page({ params }) {
  console.log('page_params', params)

  return (
    <>
      <Left params={params} />
      <div className='page-content'>
        <Test>Hello World</Test>

        {contents.map((item, index)=>{
          const { tag, text } = item
          return (
            <div key={'content' + index} dangerouslySetInnerHTML={{ 
              __html: `<${tag}>${text}</${tag}>` 
            }} />
          )
        })}
      </div>
    </>
  )
}
