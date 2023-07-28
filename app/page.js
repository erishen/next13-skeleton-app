import '@/styles/page.scss'
import Image from 'next/image'
import Test from '@/components/Test'
// import dynamic from 'next/dynamic'
// const Test = dynamic(()=>import('@/components/Test'), { ssr: true })
import { contents } from '@/utils/constant'
 
export default function Page() {
  return (
    <div className='content'>
      <Test>Hello World</Test>
      {contents.map((item, index)=>{
        const { tag, text } = item
        return (
          <div key={'content' + index}>{text}</div>
        )
      })}
    </div>
  )
}
