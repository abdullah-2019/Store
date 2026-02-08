import hero1 from '../../public/images/hero1.jpg';
import hero2 from '../../public/images/hero2.jpg';
import hero3 from '../../public/images/hero3.jpg';
import hero4 from '../../public/images/hero4.jpg';
import { Card, CardContent } from '../ui/card';
import { CarouselNext, CarouselPrevious, Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';

const carouselItems = [hero1, hero2, hero3, hero4];

export default function HeroCarousel() {
  return (
    <div className="hidden lg:block overflow-x-hidden">
      <Carousel>
        <CarouselContent>
          {carouselItems.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt={`Hero Image ${index + 1}`}
                    className="w-full h-[24rem] object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

