import Image from "next/image";
import type { ServiceVisual } from "@/data/serviceVisuals";

type Props = {
  visual: ServiceVisual;
  className?: string;
  priority?: boolean;
  sizes: string;
};

const SpatialPhoto = ({ visual, className = "", priority, sizes }: Props) => {
  return (
    <figure className={`spatial-photo ${className}`}>
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        priority={priority}
        sizes={sizes}
      />
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
};

export default SpatialPhoto;
