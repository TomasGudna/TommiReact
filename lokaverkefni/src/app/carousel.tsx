import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  /*
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
*/

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="min-w-0">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/9/29/a7dadbf6-5afc-47ee-a93b-3b5282a35f2b.jpg"
            alt="/"
          />
        </div>
        <div className="min-w-0">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/9/29/a7dadbf6-5afc-47ee-a93b-3b5282a35f2b.jpg"
            alt="/"
          />
        </div>
        <div className="min-w-0">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/9/29/a7dadbf6-5afc-47ee-a93b-3b5282a35f2b.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
