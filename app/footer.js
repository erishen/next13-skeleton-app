import '@/styles/footer.scss'
import Link from 'next/link'
import { footers } from '@/utils/constant'

export default function Footer() {
    return (
      <footer>
        <div className='wrapper'>
          {footers.map((item, index)=>{
            const { href, text = '' } = item

            if(text !== ''){
              return (
                <Link href={href} className='link' key={'footer' + index}>{text}</Link>
              )
            } else {
              return null
            }
          })}
        </div>
      </footer>
    )
}