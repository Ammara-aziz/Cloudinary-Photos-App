import { ComponentProps } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export  function FullHeart (props: ComponentProps<typeof FaRegHeart>) {
return <FaHeart  {...props} />
}