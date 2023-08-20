'use client';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { columns, CryptocurrencyColumn } from '@/app/dashboard/components/columns';

import axios from 'axios';
import { useState, useEffect } from 'react';


const DashboardPage = () => {

  const [allCryptocurrencies, setAllCryptocurrencies] = useState([]);

  const getCryptocurrencies = async () => {
    const response = await axios.get(`/api/coins`);

    setAllCryptocurrencies(response.data);
  };

  useEffect(() => {
    getCryptocurrencies().then(() => {
      console.log('Coins fetched successfully');
    });
  }, []);

  const formattedCryptocurrencies: CryptocurrencyColumn[] = allCryptocurrencies.map((item: any) => ({
    id: item.id,
    symbol: item.symbol,
    name: item.name,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">

        <>
          <div className="flex items-center justify-between">
            <Heading title="Cryptocurrencies" description="See a list of cryptocurrencies"/>
          </div>
          <Separator/>
          <DataTable searchKey="name" columns={columns} data={formattedCryptocurrencies}/>
        </>

      </div>
    </div>
  );
};

export default DashboardPage;