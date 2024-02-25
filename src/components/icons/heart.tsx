import { ComponentProps } from "react";
import { FaRegHeart } from "react-icons/fa";

export  function Heart (props: ComponentProps<typeof FaRegHeart>) {
return <FaRegHeart {...props} />
}