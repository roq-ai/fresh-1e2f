import queryString from 'query-string';
import { DietaryGuidanceInterface, DietaryGuidanceGetQueryInterface } from 'interfaces/dietary-guidance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDietaryGuidances = async (
  query?: DietaryGuidanceGetQueryInterface,
): Promise<PaginatedInterface<DietaryGuidanceInterface>> => {
  return fetcher('/api/dietary-guidances', {}, query);
};

export const createDietaryGuidance = async (dietaryGuidance: DietaryGuidanceInterface) => {
  return fetcher('/api/dietary-guidances', { method: 'POST', body: JSON.stringify(dietaryGuidance) });
};

export const updateDietaryGuidanceById = async (id: string, dietaryGuidance: DietaryGuidanceInterface) => {
  return fetcher(`/api/dietary-guidances/${id}`, { method: 'PUT', body: JSON.stringify(dietaryGuidance) });
};

export const getDietaryGuidanceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/dietary-guidances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDietaryGuidanceById = async (id: string) => {
  return fetcher(`/api/dietary-guidances/${id}`, { method: 'DELETE' });
};
