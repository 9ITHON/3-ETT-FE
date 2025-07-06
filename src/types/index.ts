export interface Docs {
  id: number;
  date: Date | string;
  content: string;
}

export type UserRole = "guest" | "user";

export interface User {
  id: number;
  name: string;
  email?: string;
  profile?: string;
  role: UserRole;
  docs?: Docs[];
}
