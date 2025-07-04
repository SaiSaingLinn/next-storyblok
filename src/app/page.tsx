import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  // Enable draft mode for development
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(`home`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    resolve_relations: "recommended_tours.tours",
  });
  return data.story;
};

export default async function Home() {
  const story = await fetchHomePage();
  return (
    <StoryblokStory
      bridgeOptions={{ resolve_relations: ["recommended_tours.tours"] }}
      story={story}
    />
  );
}
