import { User } from "@nextui-org/user";
import Link from "next/link";

export default function UserAvatar() {
  return (
    <Link href="/" className="flex item-center">
      <User
        name="Gael Richard"
        description="Développeur Web Fullstack"
        avatarProps={{
          src: "/logoP.jpg",
        }}
        classNames={{
          name: "text-md md:text-lg font-medium text-current",
          description: "text-[10px] sm:text-xs text-current opacity-80",
        }}
      />
    </Link>
  );
}
