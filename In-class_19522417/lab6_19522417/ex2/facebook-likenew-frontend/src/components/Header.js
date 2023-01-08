import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag.js';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {Avatar, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStateValue} from "../StateProvider";

const Header = () => {
    const [{user}, dispatch] = useStateValue()

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <img src=''/>
            </HeaderLeft>
            <HeaderInput>
                <SearchIcon/>
                <input placeholder='Search Popular' type='text'/>
            </HeaderInput>
            <HeaderCenter>
                <div className='header_option header_option_active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='header_option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </HeaderCenter>
            <HeaderRight>
                <div className='header_info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </HeaderRight>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`

const HeaderLeft = styled.div`
    display: flex;
  justify-content: space-evenly;
  img {
    height: 40px;
  }
`

const HeaderInput = styled.div`
    display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 33px;
  input{
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`

const HeaderCenter = styled.div`
    display: flex;
  flex: 1;
  justify-content: center;
  .header_option{
    display: flex;
    align-items: center;
    padding: 10px 30px;
    cursor: pointer;
    .MuiSvgIcon-root{
      color: gray;
    }
    &:hover{
      background-color: #eff2f5;
      border-radius: 10px;
      align-items: center;
      padding: 0 30px;
      border-bottom: none;
      .MuiSvgIcon-root{
        color: #2e81f4
      }
    }
  }
  .header_option_active{
    border-bottom: 4px solid #2e81f4;
    .MuiSvgIcon-root{
      color: #2e81f4
    }
  }
`

const HeaderRight = styled.div`
    display: flex;
  .header_info{
    display: flex;
    align-items: center;
    h4{
      margin-left: 10px;
    }
  }
`

export default Header