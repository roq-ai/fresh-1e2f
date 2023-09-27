import queryString from 'query-string';
import { CommunicationInterface, CommunicationGetQueryInterface } from 'interfaces/communication';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCommunications = async (
  query?: CommunicationGetQueryInterface,
): Promise<PaginatedInterface<CommunicationInterface>> => {
  return fetcher('/api/communications', {}, query);
};

export const createCommunication = async (communication: CommunicationInterface) => {
  return fetcher('/api/communications', { method: 'POST', body: JSON.stringify(communication) });
};

export const updateCommunicationById = async (id: string, communication: CommunicationInterface) => {
  return fetcher(`/api/communications/${id}`, { method: 'PUT', body: JSON.stringify(communication) });
};

export const getCommunicationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/communications/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCommunicationById = async (id: string) => {
  return fetcher(`/api/communications/${id}`, { method: 'DELETE' });
};
