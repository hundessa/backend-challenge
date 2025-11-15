export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const users: Users[] = [
  {
    id: 1,
    firstName: 'Hundessa',
    lastName: 'Serbessa',
    email: 'hundessa@example.com',
  },
  {
    id: 2,
    firstName: 'Selam',
    lastName: 'Kebede',
    email: 'selam@example.com',
  },
  {
    id: 3,
    firstName: 'Abebe',
    lastName: 'Tadesse',
    email: 'abebe@example.com',
  },
];
