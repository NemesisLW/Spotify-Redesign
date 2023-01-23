import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const colors = [
  "from-red-400",
  "from-blue-400",
  "from-green-400",
  "from-yellow-400",
  "from-pink-400",
  "from-purple-400",
];

function Center() {
  const { data: session } = useSession();
  const [colour, setColour] = useState(null);
  useEffect(() => {
    setColour(shuffle(colors).pop());
  }, []);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-red-300 space-x-3
        opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1
        pr-2"
        >
          <img
            className="rounded-full w-11 h-11"
            src={session?.user?.image}
            alt=""
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}
      >
        <img src="" alt="" />
        <h1>Coding</h1>
      </section>
    </div>
  );
}

export default Center;
