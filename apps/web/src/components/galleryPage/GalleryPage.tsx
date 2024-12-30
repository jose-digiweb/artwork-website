// Dependencies
import { cn } from "@/lib/utils";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionTitle } from "../utils";
import { CloudinaryImage } from "../cloudinary";

// Types
import type { Artwork } from "@bangeyhodhy/database";
type Props = {
  artWorks: Artwork[];
  className?: string;
};

const COLUMNS_NUMBER = 4;

/**
 * The GalleryPage component
 * @description A component that displays the gallery page
 * @returns {JSX.Element} The GalleryPage component
 */
export function GalleryPage({ artWorks, className }: Props) {
  const getColumns = (colIndex: number) => {
    return artWorks.filter((_, index) => index % COLUMNS_NUMBER === colIndex);
  };

  return (
    <section className={cn("flex min-h-dvh flex-col", className)}>
      <SectionTitle
        title="Browse Artworks"
        description="Browse through the collection of artworks"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[getColumns(0), getColumns(1), getColumns(2)].map((column, i) => (
          <div key={i} className="flex flex-col gap-4">
            {column.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                    <CardContent className="relative z-10 overflow-hidden rounded-xl p-0">
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
                        className="ori w-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-6 text-white">
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
        ))}
      </div>
    </section>
  );
}
