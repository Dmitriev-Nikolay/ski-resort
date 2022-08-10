export interface LoginDetails {
  username: string;
  password: string;
};

export interface LoginErrorDescription {
  error: string;
  error_description: string;
};

export interface UserRole {
  id: number;
  username: string;
  photo?: string | null;
  roles: string[];
};

export interface ErrorResponse {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string;
  msg?: string;
};

export interface LoginState {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  errorValue: LoginErrorDescription | null;
  isLoadingCurrentUser: boolean;
  user: UserRole | null;
  userPhoto: AdminPhoto;
};

export interface AdminPhoto {
  id: number;
  photo: string;
};

export interface AuthDataInfo {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};

export const loginConfig = {
  skiresort: 'skiresort',
  secret: 'secret',
  grant_type: 'password',
  scope: 'read write',
};
