import React from "react";
import { Suspense, useState, useEffect} from 'react';
import { json, Await } from 'react-router-dom';
import GalleryList from '../components/gallery/GalleryList';

import {  useSelector } from "react-redux";

function GalleryPage() {
  const galleryOptions = useSelector((state) => state.gallery.galleryOptions);
  const [gallery, setGallery] = useState([]);

  const fetchGallery = async (galleryOptions) => {
    const response = await fetch(
      `https://api.imgur.com/3/gallery/${galleryOptions.section}/${galleryOptions.sort}/${galleryOptions.window}?showViral=${galleryOptions.showViralImages}`,
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
      setGallery(resData.data);
    }
  }

  useEffect(() => {
    fetchGallery(galleryOptions)
  }, [galleryOptions]);

  return (
    gallery && 
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
   
      <Await resolve={gallery}>
        {(loadedGallery) => <GalleryList gallery={loadedGallery} />}
      </Await>
    </Suspense>
  );
}

export default GalleryPage;