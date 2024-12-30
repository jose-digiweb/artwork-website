// Dependencies
import { cn } from "@/lib/utils";

// Components
import { SectionTitle, SectionBgBlur } from "../../utils";
import { CloudinaryImage } from "../../cloudinary";
import { ArtworkType } from "@/apiClient/artwork";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Types
type Props = {
  className?: string;
  featuredArtworks: ArtworkType[];
};

export const FeaturedSection = ({ featuredArtworks, className }: Props) => {
  return (
    <section className={cn("flex w-full flex-col", className)}>
      <SectionTitle
        title="Featured Works"
        description="Bange Yhodhy's latest creations."
      />

      <SectionBgBlur className="p-2 sm:p-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
          {featuredArtworks.map((artwork, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                  <CardContent className="relative z-10 aspect-[4/5] overflow-hidden rounded-md p-0">
                    <CloudinaryImage
                      src={artwork.imagePublicId}
                      alt={artwork.title}
                      width={400}
                      height={300}
                      quality="auto"
                      format="auto"
                      crop={{
                        type: "scale",
                        source: true,
                        width: 400,
                      }}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 hidden w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-6 text-white sm:block">
                      <h2 className="mb-2 text-xl font-semibold">
                        {artwork.title}
                      </h2>
                      <p className="text-sm">
                        {artwork.year} - Acrylic on Canvas
                      </p>
                      <p className="text-sm">{artwork.dimensions}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="flex flex-col overflow-y-auto p-0 sm:max-w-3xl">
                <div className="grid w-full gap-4 p-4 md:grid-cols-2">
                  <CloudinaryImage
                    src={artwork.imagePublicId}
                    alt={artwork.title}
                    width={600}
                    height={450}
                    quality="auto"
                    format="auto"
                    crop={{
                      type: "scale",
                      source: true,
                      width: 600,
                    }}
                    className="w-full rounded-lg object-cover"
                  />

                  <div className="flex w-full flex-col gap-4">
                    <DialogHeader className="gap-2">
                      <DialogTitle asChild>
                        <h2 className="text-xl font-bold">{artwork.title}</h2>
                      </DialogTitle>

                      <DialogDescription asChild>
                        <div className="flex flex-col gap-1">
                          <p className="text-gray-600">
                            {artwork.year} - Acrylic on Canvas
                          </p>
                          <p className="text-gray-600">
                            Dimensions: {artwork.dimensions}
                          </p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>

                    <p className="mb-4">{artwork.description}</p>
                  </div>
                </div>
                <DialogFooter className="gap-2 border-t p-4">
                  <Button className="order-1 mb-2 w-full">
                    Inquire About This Piece
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Favorites
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </SectionBgBlur>
    </section>
  );
};
