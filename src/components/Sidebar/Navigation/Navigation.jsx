import React from 'react'
import  {NAVIGATION} from "../../util/navigation"
import P from '../../Text/P'

const Navigation = () => {
  return (
    <div>
        <nav>
            <ul>
                {NAVIGATION?.map((item, index) => (
                    <li key = {index} className='flex items-center py-[12px] gap-3 capitalize'>
                        {item.icon} <P content={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navigation