import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "Bange Yhodhy's Artwork";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const geistFont = fetch(
    new URL("./fonts/GeistVF.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Bange Yhodhy&apos;s Artwork
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await geistFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
