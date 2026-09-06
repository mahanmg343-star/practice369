import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ src, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const toggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
      <button
        onClick={toggle}
        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="flex-1">
        <div className="h-1.5 bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">{duration}</span>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={(e) =>
          setProgress((e.target.currentTime / e.target.duration) * 100)
        }
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default AudioPlayer;
