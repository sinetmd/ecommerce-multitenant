import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await getPayload({
    collection: "categories",
  });

  return Response.json(data);
};
