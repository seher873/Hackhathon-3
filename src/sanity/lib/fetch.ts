import { createClient } from "next-sanity";
import { Rule } from "postcss";


const client = createClient({
    projectId: "9t00cwxf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-30-10",
  });
  
  export async function sanityFetch({
    query,
    params = {},
  }: {
    query: string;
    params?: Record<string, Rule>; 
  }) {
    return await client.fetch(query, params);
  }
  