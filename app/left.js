import '@/styles/left.scss'
import Link from 'next/link'
import { menus } from '@/utils/constant'

export default function Left() {
    return (
      <div className='left'>
        {menus.map((item, index)=>{
            const { href, text } = item
            return (
              <Link href={href} className='link' key={'menu' + index}>{text}</Link>
            )
        })}
      </div>
    )
}