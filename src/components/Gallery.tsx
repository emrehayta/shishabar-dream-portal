import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/lovable-uploads/opening-hours.jpeg", alt: "Taxim Wels – Öffnungszeiten" },
  { src: "/lovable-uploads/join-the-fun.jpeg",  alt: "Taxim Bar & Lounge – Join the Fun" },
  { src: "/lovable-uploads/dart-inside.jpeg",   alt: "Dart Inside – Neu in Taxim" },
];

const Gallery = () => (
  <section id="gallery" className="py-16 px-4">
    <div className="container mx-auto max-w-lg">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              <div className="rounded-xl overflow-hidden shadow-elegant border border-primary/20">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default Gallery;
