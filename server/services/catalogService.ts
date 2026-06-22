import { places } from '../data/places';

export const catalogService = {
  listPlaces() {
    return places.map(({ scenes, ...place }) => ({
      ...place,
      sceneCount: scenes.length,
      cover: scenes[0]?.thumbnail,
    }));
  },

  getPlace(slug: string) {
    return places.find((place) => place.slug === slug);
  },
};
