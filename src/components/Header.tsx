import React from 'react'
import {HeaderContainer, UsersNumberWrapper} from './header.style'
import GroupIcon from '.././assets/group.png'

const Header = () => {
  return (
    <HeaderContainer>
           <div>
           <h3 style={{color:'#4a4848'}}>Introductions</h3>
            <p>This Channel For Company Wide Chatter</p>
           </div>
           <UsersNumberWrapper>
              <p> 3| 100</p>             
             <img src={GroupIcon} alt="users"  height={20}/>
           </UsersNumberWrapper>
        </HeaderContainer>
  )
}

export default Header