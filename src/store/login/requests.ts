const loginConstants = {
  IMG_ADMIN_URL: 'img/user',
  CURRENT_USER_URL: 'user',
};

const {
  CURRENT_USER_URL,
  IMG_ADMIN_URL
} = loginConstants;

export const loginEndpoints = {
  user: () => CURRENT_USER_URL,
  img: (id: number): string => `${IMG_ADMIN_URL}/${id}`,
};