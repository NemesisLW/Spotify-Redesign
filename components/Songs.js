import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="px-8 flex flex-col space-x-1 pb-28 text-white">
      {playlist?.tracks?.items.map((track, i) => {
        return <Song key={track.track.id} order={i} track={track} />;
      })}
    </div>
  );
}

export default Songs;
