import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

interface Props {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  scrollPosition?: any;
}

const ImageLoader = ({
  src,
  alt,
  width,
  height,
  scrollPosition,
  className,
}: Props) => {
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
      scrollPosition={scrollPosition}
      placeholderSrc={src}
      beforeLoad={() => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      }}
      effect="blur"
      delayTime={200}
      threshold={100}
      delayMethod="debounce"
    />
  );
};

export default  ImageLoader;
