import FriendCard from "@/components/layout/home/friends/FriendCard";

const FriendsContainer = async () => {
  // Get friends data from friends.json
  const res = await fetch(
    "http://keen-keeper-by-marufbillah.vercel.app/friends.json",
  );
  const friends = await res.json();

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl text-heading font-semibold mb-5">
          Your Friends
        </h2>

        {/* Friends Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsContainer;
