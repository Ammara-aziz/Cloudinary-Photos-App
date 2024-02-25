"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { SetAsFavourite } from "@/app/gallery/actions";
import { useState } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/Fullheart";

export function CloudinaryImage(
  props: any & { imageData: SearchResult ; path: string }
) {
  const [transition, setTransition] = useState();
  const { imageData } = props;
  const isFavourited = imageData.tags.includes("Favourite");
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavourited ? (
        <FullHeart
          className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            setTransition(() => {
              SetAsFavourite(imageData.public_id, false, props.path);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setTransition(() => {
              SetAsFavourite(imageData.public_id, true, props.path);
            });
          }}
        />
      )}
    </div>
  );
}
