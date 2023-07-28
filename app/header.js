import '@/styles/header.scss'
import Link from 'next/link'
import { home, menus } from '@/utils/constant'

export default function Header() {
    return (
      <header>
        <nav>
          <Link href={home?.href} className='link' key={'menu'}>{home?.text}</Link>
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