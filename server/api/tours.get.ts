import { tourService } from '../services/tourService';

export default defineEventHandler(async () => {
  return {
    service: 'tour-catalog',
    items: await tourService.listTours(),
  };
});
