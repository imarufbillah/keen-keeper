import Image from "next/image";
import { BellOff, Archive, Trash2, History } from "lucide-react";
import NotFound from "../not-found";
import CheckInButtons from "@/components/layout/friends/CheckInButtons";
import RenderInteractionCards from "@/components/layout/friends/RenderInteractionCards";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  const friend = friends.find((f) => f.id === Number(slug));

  if (!friend) {
    return {
      title: "Friend Not Found | KeenKeeper",
      description: "This friend profile doesn't exist.",
    };
  }

  return {
    title: `${friend.name} | KeenKeeper`,
    description: `View your connection with ${friend.name}. Check interaction history, relationship goal, and stay in touch.`,
  };
};

const FriendDetails = async ({ params }) => {
  const { slug } = await params;

  // Get friends data from friends.json
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  // Filter expected friend data
  const friend = friends.find((f) => f.id === Number(slug));

  if (!friend) {
    return <NotFound />;
  }

  const {
    name,
    picture,
    status,
    tags,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = friend;

  // Format next due date
  const formattedDueDate = new Date(next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const statusStyles = {
    overdue: "bg-[#FEE2E2] text-red-600",
    "almost due": "bg-[#FEF3C7] text-amber-700",
    "on-track": "bg-[#CBFADB] text-primary",
  };

  const sidebarActions = [
    {
      label: "Snooze 2 Weeks",
      icon: <BellOff size={16} />,
      className: "text-heading",
    },
    {
      label: "Archive",
      icon: <Archive size={16} />,
      className: "text-heading",
    },
    {
      label: "Delete",
      icon: <Trash2 size={16} />,
      className: "text-red-500",
    },
  ];

  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-6">
        {/* ── Left Sidebar ── */}
        <div className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3 text-center">
            {/* Avatar */}
            <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-gray-100">
              <Image
                src={picture}
                alt={name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Name */}
            <h1 className="text-lg font-semibold text-heading">{name}</h1>

            {/* Tags + Status */}
            <div className="flex flex-col gap-2 justify-center items-center">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#CBFADB] text-primary capitalize tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Status */}
              <span
                className={`px-2.5 py-1 w-fit rounded-full text-xs font-medium capitalize ${statusStyles[status] ?? "bg-gray-100 text-gray-600"}`}
              >
                {status}
              </span>
            </div>

            {/* Bio */}
            {bio && (
              <p className="text-sm text-muted italic">&ldquo;{bio}&rdquo;</p>
            )}

            {/* Preferred contact */}
            <p className="text-xs text-muted">Email: {email}</p>
          </div>

          {/* Actions Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {sidebarActions.map(({ label, icon, className }) => (
              <button
                key={label}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium hover:bg-gray-50 transition-colors ${className}`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Metrics Row */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {[
                { value: days_since_contact, label: "Days Since Contact" },
                { value: goal, label: "Goal (Days)" },
                { value: formattedDueDate, label: "Next Due" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-6 px-4 text-center"
                >
                  <span className="text-2xl sm:text-3xl font-semibold text-primary">
                    {value}
                  </span>
                  <span className="text-sm text-muted mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-primary">
                Relationship Goal
              </h2>
              <button className="px-3 py-1 text-xs font-medium border border-gray-200 rounded-md text-heading hover:bg-gray-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-muted">
              Connect every{" "}
              <span className="font-bold text-heading">{goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-base font-semibold text-primary mb-4">
              Quick Check-In
            </h2>
            <CheckInButtons friendName={name} />
          </div>

          {/* Recent Interactions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-primary">
                Recent Interactions
              </h2>
              <button className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-gray-200 rounded-md text-heading hover:bg-gray-50 transition-colors">
                <History size={13} />
                Full History
              </button>
            </div>

            {/* Render Interaction Card */}
            <RenderInteractionCards friend={friend} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
