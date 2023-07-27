import Image from 'next/image'
import Test from '@/components/Test'
// import dynamic from 'next/dynamic'
// const Test = dynamic(()=>import('@/components/Test'), { ssr: true })
 
export default function Home() {
  return (
    <Test>Hello World</Test>
  )
}
