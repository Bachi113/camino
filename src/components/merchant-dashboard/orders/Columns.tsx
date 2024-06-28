import SortIcon from '@/assets/icons/SortIcon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import getSymbolFromCurrency from 'currency-symbol-map';
import { TypeOrder } from '@/types/types';

export const columns: ColumnDef<TypeOrder>[] = [
  {
    accessorKey: 'id',
    header: 'Order ID',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='gap-2 p-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Order Date
          <SortIcon />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{format(new Date(row.original?.created_at), 'Pp')}</div>;
    },
  },
  {
    accessorKey: 'product_name',
    header: 'Product',
    cell: ({ row: { original } }) => <div className='w-24'>{(original as any).products.product_name}</div>,
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'customer_name',
    header: 'Customer Name',
    cell: ({ row: { original } }) => (original as any).customers.customer_name,
  },

  {
    accessorKey: 'price',
    header: 'Total Amount',
    cell: ({ row: { original } }) => (
      <div>
        {getSymbolFromCurrency(original.currency)} {Number(original.price) * original.quantity}
      </div>
    ),
  },

  {
    accessorKey: 'period',
    header: 'Installments',
    cell: (info) => info.getValue() ?? '-',
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='gap-2 p-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Status
          <SortIcon />
        </Button>
      );
    },
    cell: ({
      row: {
        original: { status },
      },
    }) => {
      const buttonVariant =
        status === 'active'
          ? 'default'
          : status === 'processing'
            ? 'outline'
            : status === 'pending'
              ? 'warning'
              : 'destructive';

      return (
        <Badge variant={buttonVariant} className='capitalize'>
          {status}
        </Badge>
      );
    },
  },
];