import { User } from "@nextui-org/user";
import Link from "next/link";

export default function UserAvatar() {
  return (
    <Link href="/">
      <User
        name="Gael Richard"
        description="Développeur Web Fullstack"
        avatarProps={{
          src: "/logoP.jpg",
          alt: "Logo professionnel de Gael Richard",
        }}
        classNames={{
          name: "text-md md:text-lg font-medium text-current",
          description: "text-[10px] sm:text-xs text-current opacity-80",
        }}
      />
    </Link>
  );
}
