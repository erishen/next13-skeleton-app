import '@/styles/page.scss'
import Image from 'next/image'
import Test from '@/components/Test'
import Left from '@/app/left'

export default function Page({ params }) {
  console.log('menu_page_params', params)

  return (
    <>
      <Left params={params} />
      <div className='content'>
        <Test>Menu Page {params?.id}</Test>
      </div>
    </>
  )
}
