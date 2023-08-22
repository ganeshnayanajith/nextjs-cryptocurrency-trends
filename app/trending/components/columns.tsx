'use client';

import { ColumnDef } from '@tanstack/react-table';

export type TrendingCoinColumn = {
  id: string
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string,
  small: string,
  large: string,
  slug: string,
  price_btc: number,
  score: number
}

export const columns: ColumnDef<TrendingCoinColumn>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'coin_id',
    header: 'Coin ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'symbol',
    header: 'Symbol',
  },
  {
    accessorKey: 'market_cap_rank',
    header: 'Market Cap Rank',
  },
  {
    accessorKey: 'thumb',
    header: 'Thumb',
  },
  {
    accessorKey: 'small',
    header: 'Small',
  },
  {
    accessorKey: 'large',
    header: 'Large',
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
  },
  {
    accessorKey: 'price_btc',
    header: 'Price BTC',
  },
  {
    accessorKey: 'score',
    header: 'Score',
  },
];
