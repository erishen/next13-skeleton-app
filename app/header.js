import '@/styles/header.scss'
import Link from 'next/link'
import { menus } from '@/utils/constant'

export default function Header() {
    return (
      <header>
        <nav>
          {menus.map((item, index)=>{
            const { href, text } = item
            return (
              <Link href={href} className='link' key={'menu' + index}>{text}</Link>
            )
          })}
        </nav>
      </header>
    )
}