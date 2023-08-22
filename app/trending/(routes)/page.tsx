'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { columns, TrendingCoinColumn } from '@/app/trending/components/columns';
import { DataTable } from '@/components/ui/data-table';

import axios from 'axios';
import { useState, useEffect } from 'react';

const TrendingPage = () => {

  const [allTrendingCoins, setAllTrendingCoins] = useState([]);

  const getTrendingCoins = async () => {

    const response = await axios.get(`/api/trending`);

    setAllTrendingCoins(response.data);
  };

  useEffect(() => {
    getTrendingCoins().then(() => {
      console.log('Trending coins fetched successfully');
    });
  }, []);

  const formattedTrendingCoins: TrendingCoinColumn[] = allTrendingCoins.map((item: any) => ({
    id: item.id,
    coin_id: item.coin_id,
    name: item.name,
    symbol: item.symbol,
    market_cap_rank: item.market_cap_rank,
    thumb: item.thumb,
    small: item.small,
    large: item.large,
    slug: item.slug,
    price_btc: item.price_btc,
    score: item.score,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">

        <>
          <div className="flex items-center justify-between">
            <Heading title="Trending Cryptocurrencies" description="See a list of trending cryptocurrencies"/>
          </div>
          <Separator/>
          <DataTable searchKey="name" columns={columns} data={formattedTrendingCoins}/>
        </>

      </div>
    </div>
  );
};

export default TrendingPage;