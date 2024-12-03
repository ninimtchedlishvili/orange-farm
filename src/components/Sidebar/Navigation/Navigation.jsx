import React from 'react'
import  {NAVIGATION} from "../../util/navigation"
import P from '../../Text/P'

const Navigation = () => {
  return (
    <div>
        <nav>
            <ul>
                {NAVIGATION?.map((item, index) => (
                    <li key = {index} className='flex flex-col'>
                        {item.icon} <P content={item.label} />
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navigation