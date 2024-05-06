import { User } from "@nextui-org/user";

export default function UserAvatar() {
  return (
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
  );
}
