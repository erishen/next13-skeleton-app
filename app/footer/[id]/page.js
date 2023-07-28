import '@/styles/page.scss'
import Image from 'next/image'
import Test from '@/components/Test'
import Left from '@/app/left'

export default function Page({ params }) {
  return (
    <>
      <Left />
      <div className='content'>
        <Test>Footer Page {params?.id}</Test>
      </div>
    </>
  )
}
