import React, { useState, useMemo } from 'react';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';
import Select from '@/components/ui/Select';
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type Person = {
  employeeNumber: string;
  employeeName: string;
};

type Option = {
    value: number;
    label: string;
};

const { Tr, Th, Td, THead, TBody } = Table;

const tableData = (): Person[] => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push({
          employeeNumber: `EMP${i.toString().padStart(3, '0')}`, // Example: EMP001, EMP002
          employeeName: `Employee ${i}`,
        });
    }
    return arr;
};

const totalData = tableData().length;

const pageSizeOption = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
    { value: 40, label: '40 / page' },
    { value: 50, label: '50 / page' },
];

const Result = () => {
  const columns = useMemo<ColumnDef<Person>[]>( // Update the columns
      () => [
          {
              header: 'Employee Number',
              accessorKey: 'employeeNumber', 
          },
          {
              header: 'Employee Name',
              accessorKey: 'employeeName', 
          },
          {
              header: 'Action',
              cell: ({ row }) => (
                  <button
                      onClick={() => handleAction(row.original)}
                      className="btn btn-primary  hover:text-blue-700  font-bold py-2 px-4 rounded"
                  >
                      View
                  </button>
              ),
          },
      ],
      []
  );

  const [data] = useState(() => tableData()); // Ensure your `tableData` function returns objects with `employeeNumber` and `employeeName`.

  const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
  });

  const onPaginationChange = (page: number) => {
      table.setPageIndex(page - 1);
  };

  const onSelectChange = (value = 0) => {
      table.setPageSize(Number(value));
  };

  const handleAction = (rowData: Person) => {
      console.log('Action clicked for:', rowData);
      // Add your action logic here
  };

  return (
      <div>

          <Card>
            <h5>Results</h5>
              <Table>
                  <THead>
                      {table.getHeaderGroups().map((headerGroup) => (
                          <Tr key={headerGroup.id}>
                              {headerGroup.headers.map((header) => (
                                  <Th key={header.id} colSpan={header.colSpan}>
                                      {flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                                  </Th>
                              ))}
                          </Tr>
                      ))}
                  </THead>
                  <TBody>
                      {table.getRowModel().rows.map((row) => (
                          <Tr key={row.id}>
                              {row.getVisibleCells().map((cell) => (
                                  <Td key={cell.id}>
                                      {flexRender(
                                          cell.column.columnDef.cell,
                                          cell.getContext()
                                      )}
                                  </Td>
                              ))}
                          </Tr>
                      ))}
                  </TBody>
              </Table>
              <div className="flex items-center justify-between mt-4">
                  <Pagination
                      pageSize={table.getState().pagination.pageSize}
                      currentPage={table.getState().pagination.pageIndex + 1}
                      total={totalData}
                      onChange={onPaginationChange}
                  />
                  <div style={{ minWidth: 130 }}>
                      <Select<Option>
                          size="sm"
                          isSearchable={false}
                          value={pageSizeOption.filter(
                              (option) =>
                                  option.value ===
                                  table.getState().pagination.pageSize
                          )}
                          options={pageSizeOption}
                          onChange={(option) => onSelectChange(option?.value)}
                      />
                  </div>
              </div>
          </Card>
      </div>
  );
};

export default Result;