"use client"

import { ColumnDef } from "@tanstack/react-table"

export type CryptocurrencyColumn = {
  id: string
  symbol: string;
  name: string;
}

export const columns: ColumnDef<CryptocurrencyColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
];
