import React from 'react'
import Story from './Story'
import styled from 'styled-components'

const Stories = () => {
    return(
        <StoriesWrapper>
            <Story
                image='https://res.cloudinary.com/dkwihofta/image/upload/v1669278398/HD-wallpaper-mikasa-anime-attack-on-titan-shingeki-no-kyojin-snk_cbauil.jpg'
                profileSrc='https://res.cloudinary.com/dkwihofta/image/upload/v1671884506/780b0513e48d17854b6b34c47cb1baf7_lipndt.jpg'
                title='Mikasa'
            />
            <Story
                image='https://res.cloudinary.com/dkwihofta/image/upload/v1671884185/g1ljiszo4qhthfpluzbt_p7a8na.webp'
                profileSrc='https://res.cloudinary.com/dkwihofta/image/upload/v1671884445/seo-title_bddcw5.jpg'
                title='Nike'
            />
            <Story
                image='https://res.cloudinary.com/dkwihofta/image/upload/v1671884269/09-11-2022-adidas-q3-results-press-release.jpg__800x900_q85_crop-smart_subsampling-2_k7nqyt.jpg'
                profileSrc='https://res.cloudinary.com/dkwihofta/image/upload/v1671884404/adidas-logo-symbol-clothes-design-icon-abstract-football-illustration-free-vector_uahwfo.webp'
                title='Adidas'
            />
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div`
    display: flex;
`

export default Stories