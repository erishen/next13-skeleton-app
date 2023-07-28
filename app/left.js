import '@/styles/left.scss'
import Link from 'next/link'
import { menus, subMenus } from '@/utils/constant'

const createMenus = ()=>{
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

const createSubMenus = (subId)=>{
  console.log('createSubMenus', subId)

  if(subId > 0){
    return (
      <div className='left'>
        {subMenus[subId - 1].map((item, index)=>{
          const { href, text } = item
          return (
            <Link href={href} className='link' key={'menu' + index}>{text}</Link>
          )
        })}
      </div>
    )
  } else {
    return (
      <>
        {createMenus()}
      </>
    )
  }
}

export default function Left({ params }) {
  if(params === undefined)
    params = {}

  console.log('left_params', params)
  
  const { id = '' } = params

  if(id === ''){
    return (
      <>
        {createMenus()}
      </>
    )
  } else if(id.indexOf('-') === -1){
    return (
      <>
        {createSubMenus(parseInt(id, 10))}
      </>
    )
  } else {
    const idArr = id.split('-')
    const newId = parseInt(idArr?.[0], 10)

    return (
      <>
        {createSubMenus(newId)}
      </>
    )
  }
}