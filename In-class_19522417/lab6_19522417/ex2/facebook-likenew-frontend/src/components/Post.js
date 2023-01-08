import {Avatar} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Post = ({profilePic, message, timestamp, imgName, username}) => {
    return (
        <PostWrapper>
            <PostTop>
                <Avatar src={profilePic} className='post_avatar'/>
                <div className='post_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </PostTop>
            <PostBottom>
                <p>{message}</p>
            </PostBottom>
            {
                imgName ? (
                    <div className='post_image'>
                        <img src={`http://localhost:9000/images/single?name=${imgName}`} alt='Posts' />
                    </div>
                ) : (
                    console.log('DEBUG >>> no image here')
                )
            }
            <PostOptions>
                <div className='post_option'>
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className='post_option'>
                    <ChatBubbleIcon/>
                    <p>Comment</p>
                </div>
                <div className='post_option'>
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className='post_option'>
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </PostOptions>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
    width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
  .post_image{
    img{
      width: 100%;
    }
  }
`

const PostTop = styled.div`
    display: flex;
  postion: relative;
  align-items: center;
  padding: 15px;
  .post_avatar{
    margin-right: 10px;
  }
  .post_topInfo{
    h3{
      font-size: medium;
    }
    p{
      font-size: small;
      color: gray;
    }
  }
`

const PostBottom = styled.div`
    margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`

const PostOptions = styled.div`
    padding: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
  .post_option {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex: 1;
    p{
      margin-left: 10px;
    }
    &:hover{
      background-color: #eff2f5;
      border-radius: 10px;
    }
  }
`

export default Post

