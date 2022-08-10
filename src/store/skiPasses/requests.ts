const skiPassesConstants = {
  SKIPASSES_URL: 'skipass',
  SKIPASSES_QUANTITY: 'skipass/getquantity',
  SKIPASS_REMOVE_URL: 'skipass?skiPassNumber=',
  SKIPASS_ASSIGNED_VISITOR_URL: 'visitor/byskipassnumber?skiPassNumber=',
};

const {
  SKIPASSES_URL,
  SKIPASSES_QUANTITY,
  SKIPASS_REMOVE_URL,
  SKIPASS_ASSIGNED_VISITOR_URL
} = skiPassesConstants;

export const skiPassesEndpoints = {
  all: () => SKIPASSES_URL,
  allQuery: (search: number) => `${SKIPASSES_URL}/page/${search || ''}`,
  quantity: (search: number) => `${SKIPASSES_QUANTITY}/${search || ''}`,
  create: () => SKIPASSES_URL,
  update: () => SKIPASSES_URL,
  remove: (number: number) => `${SKIPASS_REMOVE_URL}${number}`,
  assignedVisitor: (number: number) => `${SKIPASS_ASSIGNED_VISITOR_URL}${number}`,
};

export const skiPassesParams = {
  allQuery: (page: number, size: number) => ({
    params: {
      pageNumber: page,
      pageSize: size,
    },
  }),
};