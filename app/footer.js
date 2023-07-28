import '@/styles/footer.scss'
import Link from 'next/link'

export default function Footer() {
    return (
      <footer>
        <div className='wrapper'>
          <Link href="/footer1" className='link'>Footer1</Link>
          <Link href="/footer2" className='link'>Footer2</Link>
          <Link href="/footer3" className='link'>Footer3</Link>
          <Link href="/footer4" className='link'>Footer4</Link>
          <Link href="/footer5" className='link'>Footer5</Link>
        </div>
      </footer>
    )
}