import '@/styles/header.scss'
import Link from 'next/link'

export default function Header() {
    return (
      <header>
        <nav>
          <Link href="/menu1" className='link'>Menu1</Link>
          <Link href="/menu2" className='link'>Menu2</Link>
          <Link href="/menu3" className='link'>Menu3</Link>
          <Link href="/menu4" className='link'>Menu4</Link>
          <Link href="/menu5" className='link'>Menu5</Link>
        </nav>
      </header>
    )
}