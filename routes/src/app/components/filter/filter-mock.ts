export const filterData = {
  filters: [
    {
      type: 'text',
      label: 'Product Name',
      key: 'productName',
      placeholder: 'Enter product name',
    },
    {
      type: 'select',
      label: 'Category',
      key: 'category',
      options: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Books', value: 'books' },
      ],
    },
    {
      type: 'radio',
      label: 'Availability',
      key: 'availability',
      options: [
        { label: 'In stock', value: 'in_stock' },
        { label: 'Out of stock', value: 'out_of_stock' },
      ],
    },
    {
      type: 'dateRange',
      label: 'Date Added',
      key: 'addedDate',
      fromLabel: 'From',
      toLabel: 'To',
    },
  ],
};
