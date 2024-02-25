"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
  
export async function SetAsFavourite(
    publicId: string, 
    isFavourite: boolean,
    path : string
    ) {
  if (isFavourite) {
    console.log("removing favourite from" + publicId);
    await cloudinary.v2.uploader.add_tag("Favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("Favourite", [publicId]);
  }
  await new Promise(resolve => setTimeout(resolve,1500))
  revalidatePath(path);
}
