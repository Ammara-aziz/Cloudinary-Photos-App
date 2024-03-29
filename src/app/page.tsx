"use client";
import { CldImage ,CldUploadButton} from "next-cloudinary";
import { useState } from "react";


export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="mx0o3xtr"
      />
      {imageId && (
        <CldImage
          width="400"
          height="00"
          src={imageId}
          tint="40:blue:green:purple"
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
