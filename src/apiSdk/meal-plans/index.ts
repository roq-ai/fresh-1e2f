import queryString from 'query-string';
import { MealPlanInterface, MealPlanGetQueryInterface } from 'interfaces/meal-plan';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMealPlans = async (
  query?: MealPlanGetQueryInterface,
): Promise<PaginatedInterface<MealPlanInterface>> => {
  return fetcher('/api/meal-plans', {}, query);
};

export const createMealPlan = async (mealPlan: MealPlanInterface) => {
  return fetcher('/api/meal-plans', { method: 'POST', body: JSON.stringify(mealPlan) });
};

export const updateMealPlanById = async (id: string, mealPlan: MealPlanInterface) => {
  return fetcher(`/api/meal-plans/${id}`, { method: 'PUT', body: JSON.stringify(mealPlan) });
};

export const getMealPlanById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/meal-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMealPlanById = async (id: string) => {
  return fetcher(`/api/meal-plans/${id}`, { method: 'DELETE' });
};
