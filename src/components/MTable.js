import React from 'react';
import MaterialTable from 'material-table';
//import { data } from '../data';
export const data = [
  {
    id: 1,
    title: 'The Hunger Games',
    authors: 'Suzanne Collins',
    num_pages: 374,
    rating: 4.33,
  },
  {
    id: 2,
    title: 'Harry Potter and the Order of the Phoenix',
    authors: 'J.K. Rowling',
    num_pages: 870,
    rating: 4.48,
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    authors: 'Harper Lee',
    num_pages: 324,
    rating: 4.27,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    authors: 'Jane Austen',
    num_pages: 279,
    rating: 4.25,
  },
  {
    id: 5,
    title: 'Twilight',
    authors: 'Stephenie Meyer',
    num_pages: 498,
    rating: 3.58,
  },
  {
    id: 6,
    title: 'The Book Thief',
    authors: 'Markus Zusak',
    num_pages: 552,
    rating: 4.36,
  },
];

const columns = [
  { title: 'Title', field: 'title' },
  { title: 'Author', field: 'authors' },
  { title: 'Page Count', field: 'num_pages' },
  { title: 'Rating', field: 'rating' },
];

const MTable = () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable columns={columns} data={data} title="Books Directory" />
    </div>
  );
};
export default MTable;