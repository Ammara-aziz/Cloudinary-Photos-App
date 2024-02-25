import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        Photos Album
        <div className="ml-auto flex items-center space-x-4"></div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
export default Header;
