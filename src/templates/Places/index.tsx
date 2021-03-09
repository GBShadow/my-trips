type ImageProps = {
  url: string;
  height: number;
  width: number;
}

export type PlaceTemplateProps = {
  place: {
    name: string;
    slug: string;
    description: {
      html: string;
    }
    gallery: ImageProps[];
  }
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {
        place.gallery.map((image, index) => (
          <img key={`photo-${index}`} src={image.url} alt={place.name}/>
        ))
      }
    </>
  )
}