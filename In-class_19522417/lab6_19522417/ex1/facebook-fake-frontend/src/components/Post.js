import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material'

const Post = ({username, caption, imageUrl}) => {
    return(
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt={username}
                    src='https://res.cloudinary.com/dkwihofta/image/upload/v1669278398/HD-wallpaper-mikasa-anime-attack-on-titan-shingeki-no-kyojin-snk_cbauil.jpg'
                />
                <h3>{username}</h3>
            </div>
            <img className='post_image' src={imageUrl}/>
            <h4 className='post_text'><strong>{username}</strong> {caption}</h4>
        </div>

    )
}

export default Post