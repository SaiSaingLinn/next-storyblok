import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function Grid(params: any) {
  return (
    <section {...storyblokEditable(params.blok)} className="bg-blue-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {params.blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {params.blok.items.map((blok: any) => (
            <StoryblokServerComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
