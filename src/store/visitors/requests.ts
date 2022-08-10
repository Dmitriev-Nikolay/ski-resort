const visitorsConstants = {
  VISITORS_URL: 'visitor',
  VISITORS_QUANTITY: 'visitor/getquantity',
  IMG_VISITOR_URL: 'img/visitor',
  VISITOR_REMOVE_URL: 'visitor?visitorId=',
  VISITOR_ADD_SKIPASS_URL: 'visitor/addskipass',
  VISITOR_TRANSFER_SKIPASS_URL: 'visitor/addskipass',
  VISITOR_ADD_INSTRUCTOR_URL: 'visitor/addcoach',
};

const {
  VISITORS_URL,
  VISITORS_QUANTITY,
  IMG_VISITOR_URL,
  VISITOR_REMOVE_URL,
  VISITOR_ADD_SKIPASS_URL,
  VISITOR_TRANSFER_SKIPASS_URL,
  VISITOR_ADD_INSTRUCTOR_URL
} = visitorsConstants;

export const visitorsEndpoints = {
  all: () => VISITORS_URL,
  allQuery: (search: string): string => `${VISITORS_URL}/page/${search || ''}`,
  quantity: (search: string): string => `${VISITORS_QUANTITY}/${search || ''}`,
  img: (id: number): string => `${IMG_VISITOR_URL}/${id}`,
  create: (): string => VISITORS_URL,
  update: (): string => VISITORS_URL,
  remove: (id: number): string => `${VISITOR_REMOVE_URL}${id}`,
  addCoach: (): string => `${VISITOR_ADD_INSTRUCTOR_URL}`,
  addSkiPass: (): string => `${VISITOR_ADD_SKIPASS_URL}`,
  transferSkiPass: (): string => `${VISITOR_TRANSFER_SKIPASS_URL}`,
};

export const visitorsParams = {
  allQuery: (page: number, limit: number) => ({
    params: {
      pageNumber: page,
      pageSize: limit,
    },
  }),
  addCoach: (visitorId: number, instructorId: number) => ({
    params: {
      visitorId,
      coachId: instructorId,
    },
  }),
  addSkiPass: (visitorId: number, skiPassNumber: number) => ({
    params: {
      visitorId,
      skiPassNumber,
    },
  }),
  transferSkiPass: (visitorIdFrom: number, visitorIdTo: number) => ({
    params: {
      fromVisitorId: visitorIdFrom,
      toVisitorId: visitorIdTo,
    },
  }),
};