import { groq } from "next-sanity";

export const allProducts = groq`
 *[_type=="product"]`;
export const forProducts = groq`*[_type=="product"][4..7]`;
