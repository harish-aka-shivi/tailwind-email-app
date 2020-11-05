import React from 'react';
import clsx from 'clsx';

const CategoryItem = ({ color, title }) => (
  <div className="w-full flex flex-row p-2 items-center space-x-4">
    <div className={clsx('h-6 w-6 rounded-full', color)} />
    <div>{title}</div>
  </div>
);

const Categories = () => (
  <div className="w-full flex flex-col space-y-4 p-4">
    Categories
    <CategoryItem color="bg-orange-200" title="Work" />
    <CategoryItem color="bg-green-200" title="Documents" />
    <CategoryItem color="bg-blue-200" title="Social" />
    <CategoryItem color="bg-teal-200" title="Advertising" />
  </div>
);

export default Categories;
