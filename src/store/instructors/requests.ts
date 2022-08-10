const instructorsConstants = {
  INSTRUCTORS_URL: 'coach',
  INSTRUCTORS_QUANTITY: 'coach/getquantity',
  IMG_INSTRUCTOR_URL: 'img/coach',
  INSTRUCTOR_REMOVE_URL: 'coach?coachId=',
  ALL_INSTRUCTOR_VISITORS: 'visitor/bycoachid?coachId=',
};

const {
  INSTRUCTORS_URL,
  INSTRUCTORS_QUANTITY,
  IMG_INSTRUCTOR_URL,
  INSTRUCTOR_REMOVE_URL,
  ALL_INSTRUCTOR_VISITORS
} = instructorsConstants;

export const instructorsEndpoints = {
  all: (): string => INSTRUCTORS_URL,
  allQuery: (search: string): string => `${INSTRUCTORS_URL}/page/${search || ''}`,
  quantity: (search: string): string => `${INSTRUCTORS_QUANTITY}/${search || ''}`,
  img: (id: number): string => `${IMG_INSTRUCTOR_URL}/${id}`,
  create: (): string => INSTRUCTORS_URL,
  update: (): string => INSTRUCTORS_URL,
  remove: (id: number): string => `${INSTRUCTOR_REMOVE_URL}${id}`,
  allVisitors: (id: number): string => `${ALL_INSTRUCTOR_VISITORS}${id}`,
};

export const instructorsParams = {
  allQuery: (page: number, limit: number) => ({
    params: {
      pageNumber: page,
      pageSize: limit,
    },
  }),
};