import { CalendarIcon } from "@heroicons/react/24/outline";

type Props = {
  date: Date;
};

export const PostDate = ({ date }: Props) => (
  <div className="rounded-lg mb-4 inline-flex flex-row items-center text-sm p-2 bg-gray-700 gap-2">
    <CalendarIcon className="w-4 h-4" />
    <span>Published {date.toLocaleDateString()}</span>
  </div>
);
