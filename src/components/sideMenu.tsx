import { Button } from "@/components/ui/button";
import { IoImagesOutline } from "react-icons/io5";
import { FaRegHeart, FaRegFolderOpen } from "react-icons/fa";
import { MdOutlinePhotoAlbum } from "react-icons/md";
import { Heart } from "./icons/heart";
import Link from "next/link";

function SideMenu() {
  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="flex gap-2 w-full justify-start"
            >
              <Link href="/gallery">
                <IoImagesOutline />
                Gallery
              </Link>
            </Button>
            {/* <Button
              variant="ghost"
              className="flex gap-2 w-full justify-start "
            >
              <FaRegFolderOpen />
              Albums
            </Button> */}
            <Button
              asChild
              variant="ghost"
              className="flex gap-2 w-full justify-start"
            >
              <Link href="/favourites">
              <Heart />
              Favourites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideMenu;
