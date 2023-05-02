
import React from 'react';
import style from "./GalleryList.module.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { NavLink } from "react-router-dom";

const GalleryList = (props) => {

    return (
      <div className={style.galleryList}>

        <ImageList cols={4} gap={20} rowHeight={300}>
          
            {props.gallery.map((item) => (
                
                 <NavLink
                 key={item.id}
                 to={`/gallery/${item.id}`}
                 className={({ isActive }) =>
                   isActive ? style.active : undefined
                 }
                 end
               >
                 <ImageListItem  >
                {item.cover != undefined &&  <img
                    src={`https://i.imgur.com/${item.cover}.jpg`}
                    srcSet={`https://i.imgur.com/${item.cover}.jpg`}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className={style.mainImage}
                />}
               
                <ImageListItemBar
                    title={item.title}
                    subtitle={item.description}
                    sx={{ background: 'rgba(0, 0, 0, 0.9)' }}
                   
                />
                </ImageListItem>
               </NavLink>
                
            ))}
            </ImageList>
      </div>
    );
  };

export default GalleryList;