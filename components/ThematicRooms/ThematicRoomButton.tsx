import Link from "next/link";

type ThematicRoomButtonProps = {
  roomName: string;
  id: number;
};

export default function ThematicRoomButton({
  roomName,
  id,
}: ThematicRoomButtonProps) {
  return (
    <div
      style={{ backgroundColor: "#0172B6" }}
      className="flex w-full cursor-pointer items-center justify-center p-4 text-center transition-colors hover:bg-blue-700 md:basis-[32%]"
    >
      <Link
        className="p-5 text-sm font-medium text-white hover:underline"
        href={`/thematicrooms/room?roomName=${encodeURIComponent(roomName)}&id=${id}`}
      >
        {roomName}
      </Link>
    </div>
  );
}
