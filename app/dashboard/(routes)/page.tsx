import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { columns, CryptocurrencyColumn } from '@/app/dashboard/components/columns';


const DashboardPage = () => {

    const cryptocurrencies = [
        {
            'id': '01coin',
            'symbol': 'zoc',
            'name': '01coin'
        },
        {
            'id': '0chain',
            'symbol': 'zcn',
            'name': 'Zus'
        },
        {
            'id': '0vix-protocol',
            'symbol': 'vix',
            'name': '0VIX Protocol'
        },
    ];

    const formattedCryptocurrencies: CryptocurrencyColumn[] = cryptocurrencies.map((item) => ({
        id: item.id,
        symbol: item.symbol,
        name: item.name
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">

                <>
                    <div className="flex items-center justify-between">
                        <Heading title="Cryptocurrencies" description="See a list of cryptocurrencies"/>
                    </div>
                    <Separator/>
                    <DataTable searchKey="label" columns={columns} data={formattedCryptocurrencies}/>
                </>

            </div>
        </div>
    );
};

export default DashboardPage;