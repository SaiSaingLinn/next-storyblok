import RecommendedTour from "@/components/RecommendedTour";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  // Enable draft mode for development
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
  });
  return data.story;
};

const fetchAllTours = async () => {
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
  });
  return data.stories;
};

export default async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour: any) => (
          <RecommendedTour key={tour.content._uid} story={tour} />
        ))}
      </div>
    </div>
  );
}
