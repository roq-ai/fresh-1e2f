import queryString from 'query-string';
import { NutritionCourseInterface, NutritionCourseGetQueryInterface } from 'interfaces/nutrition-course';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNutritionCourses = async (
  query?: NutritionCourseGetQueryInterface,
): Promise<PaginatedInterface<NutritionCourseInterface>> => {
  return fetcher('/api/nutrition-courses', {}, query);
};

export const createNutritionCourse = async (nutritionCourse: NutritionCourseInterface) => {
  return fetcher('/api/nutrition-courses', { method: 'POST', body: JSON.stringify(nutritionCourse) });
};

export const updateNutritionCourseById = async (id: string, nutritionCourse: NutritionCourseInterface) => {
  return fetcher(`/api/nutrition-courses/${id}`, { method: 'PUT', body: JSON.stringify(nutritionCourse) });
};

export const getNutritionCourseById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/nutrition-courses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteNutritionCourseById = async (id: string) => {
  return fetcher(`/api/nutrition-courses/${id}`, { method: 'DELETE' });
};
