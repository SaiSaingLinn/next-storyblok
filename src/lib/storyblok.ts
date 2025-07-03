import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import RecommendedTours from "@/components/RecommendedTours";
import Testimonial from "@/components/Testimonial";
import Tour from "@/components/Tour";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: "ghLoZz6FrCnOHciyVyPjJwtt",
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
  enableFallbackComponent: true,
  // apiOptions: {
	// 	endpoint: process.env.STORYBLOK_API_BASE_URL ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2` : undefined,
	// },
});
