export interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

export const myData: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, USA'
};

export const family: Person[] = [
  {
    name: 'Jane Doe',
    age: 28,
    email: 'jane.doe@example.com',
    phone: '123-456-7891',
    address: '123 Main St, Anytown, USA'
  },
  {
    name: 'Jim Doe',
    age: 25,
    email: 'jim.doe@example.com',
    phone: '123-456-7892',
    address: '123 Main St, Anytown, USA'
  }
];
