import React from 'react'
import {FcBullish} from 'react-icons/fc'
import {DASHBOARD_SIDEBAR_LINKS,DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
interface Item{
    key:string,
    path:string,
    icon:string,
    label:string

}
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const Slidebar = () => {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
    <FcBullish/>
    <span className='text-neutral-100 text-lg'>OpenShop</span>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((item:Item)=>(
                <SidebarLink key={item.key} item={item}/>
                ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item:Item) => (
					<SidebarLink key={item.key} item={item} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
    </div>

  )
}
const  SidebarLink:React.FC<{item:Item,key:string}> = ({item})=>{
    const {pathname} = useLocation()
    return(
        <Link to={item.path} className={classNames(pathname===item.path?'text-white':'text-neutral-400',linkClass)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
export default Slidebar