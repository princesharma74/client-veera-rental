import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
    image: string
    className?: string
    children: React.ReactNode
}

const Header : React.FC<HeaderProps> = ({
    image,
    className,
    children
}) => {
  return (
      <div className={cn("relative rounded-xl m-2 h-96 flex", className)}>
        <Image
          alt="Car"
          src={image}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 rounded-xl"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl z-1"></div>
        <div className="max-w-7xl mx-auto p-10 z-10 text-white w-full flex items-end">
          <div className="text-6xl md:text-7xl font-bold">{children}</div>
        </div>
      </div>
  )
}


export default Header