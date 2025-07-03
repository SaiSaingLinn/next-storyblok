import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.getStory(`home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: 'recommended_tours.tours',
  })
  return data.story
}

export default async function Home() {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
}