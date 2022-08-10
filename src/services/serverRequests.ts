// import AxiosDefault from './axios';
// import { AddVisitor, Visitor } from '../store/visitors/interfaces';
// import { AddInstructor, Instructor } from '../store/instructors/interfaces';
// import { AddSkiPass, SkiPass } from '../store/skiPasses/interfaces';
// import { BASE64_IMAGE } from '../store/constants';

// export const getPieceOfData = async (url: string, page: number, size: number, search: string) => {
//   return await AxiosDefault.get(`${url}/page/${search ? search : ''}?pageNumber=${page}&pageSize=${size}`);
// };

// export const getDataBase = async (url: string) => {
//   return await AxiosDefault.get(url);
// };

// export const getPhoto = async (url: string, id: number) => {
//   return await AxiosDefault.get(`${url}/${id}`)
//     .then(data => `${BASE64_IMAGE}${data}`);
// };

// export const getQuantity = async (url: string, search: string) => {
//   return await AxiosDefault.get(`${url}/${search ? search : ''}`)
// };

// export const getAllVisitorsForInstructor = async (url: string, id: number) => {
//   return await AxiosDefault.get(`${url}${id}`);
// };

// export const deleteItem = async (url: string, id: number) => {
//   return await AxiosDefault.delete(`${url}${id}`);
// };

// type ItemForAdd = AddVisitor | AddInstructor | AddSkiPass;

// export const addItem = async (url: string, currentItem: ItemForAdd) => {
//   return await AxiosDefault.post(url, currentItem);
// };

// type ItemForEdit = Visitor | Instructor | SkiPass;

// export const editItem = async (url: string, currentItem: ItemForEdit) => {
//   return await AxiosDefault.put(url, currentItem);
// };

// export const getSkipassAssignedVisitor = async (url: string, skiPassNumber: number) => {
//   return await AxiosDefault.get(`${url}${skiPassNumber}`);
// };

// export const addSkipassToVisitor = async (url: string, visitorId: number, skiPassNumber: number) => {
//   return await AxiosDefault.post(`${url}?visitorId=${visitorId}&skiPassNumber=${skiPassNumber}`)
// };

// export const transferSkipassToVisitor = async (url: string, visitorIdFrom: number, visitorIdTo: number) => {
//   return await AxiosDefault.put(`${url}${visitorIdFrom}&toVisitorId=${visitorIdTo}`)
// };

// export const addInsructorToVisitor = async (url: string, visitorId: number, instructorId: number) => {
//   return await AxiosDefault.post(`${url}?visitorId=${visitorId}&coachId=${instructorId}`)
// };

export {};