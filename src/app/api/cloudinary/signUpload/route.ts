// Dependencies
import { v2 as cloudinary } from "cloudinary";

/**
 * The POST route for the Cloudinary API
 * @description The POST route for the Cloudinary API
 * @param {Request} request The request object
 * @returns {Promise<Response>} The response object
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET!,
  );

  return Response.json({ signature });
}
