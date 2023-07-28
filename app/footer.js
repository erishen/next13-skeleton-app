import '@/styles/footer.scss'
import Link from 'next/link'
import { footers } from '@/utils/constant'

export default function Footer() {
    return (
      <footer>
        <div className='wrapper'>
          {footers.map((item, index)=>{
            const { href, text } = item
            return (
              <Link href={href} className='link' key={'footer' + index}>{text}</Link>
            )
          })}
        </div>
      </footer>
    )
}