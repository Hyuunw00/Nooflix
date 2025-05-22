import { IMAGE_BASE_URL } from "@/constants/urls";
import { Discover } from "@/types/discover";
import Image from "next/image";

export default function ThemeItem({
  data,
  title,
  subtitle,
}: {
  data: Discover[];
  title: string;
  subtitle: string;
}) {
  return (
    <li className="flex items-center gap-2 bg-[var(--gray-050)]">
      <div className="flex flex-wrap max-w-[108px] overflow-hidden rounded-[6px]">
        {data.map((data) => (
          <Image
            key={data.id}
            src={`${IMAGE_BASE_URL}original${data.poster_path}`}
            width={54}
            height={54}
            alt="예비 이미지"
            className="max-w-[54px] max-h-[54px]"
          />
        ))}
      </div>

      <div className="py-4 px-3 flex flex-col gap-2">
        <div className="text-[14px] font-bold text-[var(--gray-800)]">
          {title}
        </div>
        <h6 className="text-[13px] text-[var(--gray-600)]">{subtitle}</h6>
      </div>
    </li>
  );
}
