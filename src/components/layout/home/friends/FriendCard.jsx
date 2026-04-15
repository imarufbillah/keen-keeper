import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  return (
    <Link href={`/${id}`}>
      <div className="p-5 sm:p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4 items-center">
        {/* Avatar */}
        <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-gray-100 shrink-0">
          <Image
            src={picture}
            alt={name}
            className="w-full h-full object-cover"
            height={80}
            width={80}
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          {/* Name */}
          <h3 className="text-base sm:text-lg text-heading font-semibold leading-tight">
            {name}
          </h3>

          {/* Days Since Contact */}
          <p className="text-xs text-muted">{days_since_contact}d ago</p>

          {/* Tags */}
          <div className="mt-0.5 flex gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-full text-xs font-medium capitalize bg-[#CBFADB] text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Status */}
          <div className="">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${status === "overdue" ? "bg-[#FEE2E2] text-red-600" : status === "almost due" ? "bg-[#FEF3C7] text-amber-700" : "bg-[#CBFADB] text-primary"}`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
