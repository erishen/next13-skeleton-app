import Image from 'next/image'
// import dynamic from 'next/dynamic'
// const Test = dynamic(() => import('./components/Test'), { ssr: false })
import Test from './components/Test'
 
export default function Home() {
  return (
    <Test>Hello World</Test>
  )
}
