import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { json } from "react-router-dom";
import style from "./GalleryAlbum.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

export default function GalleryAlbum() {
  const params = useParams();
  const [galleryAlbum, setGalleryAlbum] = useState([]);
  const [galleryAlbumImages, setGalleryAlbumImages] = useState([]);

  const fetchGalleryAlbum = async (albumId) => {
    const response = await fetch(
      `https://api.imgur.com/3/gallery/album/${albumId}`,
      {
        headers: {
          Authorization: "Client-ID a14c42a6e72a3e9",
        },
      }
    );

    if (!response.ok) {
      throw json(
        { message: "Could not fetch gallery." },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
      setGalleryAlbum(resData.data);
      setGalleryAlbumImages(resData.data.images);
    }
  };

  useEffect(() => {
    fetchGalleryAlbum(params.Id);
  }, []);

  return (
    <>
      <div className={style.header}>
        <h1>{galleryAlbum.title}</h1>
        <b>Score: {galleryAlbum.score}</b>
        <div className={style.votes}>
          <div>
            {" "}
            <ThumbUpIcon color="success"/> {galleryAlbum.ups}
          </div>
          <div>
            <ThumbDownAltIcon color="error"/> {galleryAlbum.downs}
          </div>
        </div>
      </div>
     
      <div className={style.albumWrapper}>
        {galleryAlbumImages.map((image) => (
          <div key={image.id}>
            <div className={style.albumMedia}>
              {image.type != "video/mp4" ? (
                <img
                  src={image.link}
                  alt={image.title}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <video controls autoPlay loop muted>
                  <source src={image.link} type="video/mp4" />
                </video>
                
              )}
            </div>
            <div className={style.content}>
              {image.title && <h2>{image.title}</h2>}
              {image.description && <p>{image.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
