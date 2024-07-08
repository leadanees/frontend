import React from 'react'
import galleryImg from './galleryImg';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'; //Masonry layouts are a type of layout where items are arranged in a grid-like fashion 
const MasonaryImageGallery = () => {
    return (
        <ResponsiveMasonry>
            <Masonry gutter='1rem'>
                {
                    galleryImg.map((item, index) => (
                        <img className='masonry__img' src={item} key={index} style={{width:'100%',display:'block',borderRadius:'10px'}}/>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
  )
}

export default MasonaryImageGallery;