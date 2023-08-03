import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "demo-fe-guild";

export const client = prismic.createClient(repositoryName);
