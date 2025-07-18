import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug: string) => {
  // Enable draft mode for development
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === 'development' || isEnabled ? 'draft' : 'published',
  })
  return data.story
}

const TourPage = async (props: any) => {
  // const story = await fetchTourPage(props.params.slug);
  const { slug } = await props.params
  const story = await fetchTourPage(slug)
  // console.log('story', story)
  return <StoryblokStory story={story} />
}

export default TourPage