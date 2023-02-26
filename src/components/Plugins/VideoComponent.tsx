interface VideoPlayerProps {
    url: string;
    className?: string;
    }
const VideoPlayer = ({ url, className }: VideoPlayerProps) => (
    <div className="flex justify-center items-center max-w-6xl video">
     <iframe src={`https://www.youtube.com/embed/${url} `}title="Magical Kenya Signature Experiences Collection 2021-2022"  className={className}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
  
    export default VideoPlayer;