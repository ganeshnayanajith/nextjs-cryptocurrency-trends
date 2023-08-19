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
        {
            'id': '0x',
            'symbol': 'zrx',
            'name': '0x Protocol'
        },
        {
            'id': '0x0-ai-ai-smart-contract',
            'symbol': '0x0',
            'name': '0x0.ai: AI Smart Contract'
        },
        {
            'id': '0x1-tools-ai-multi-tool',
            'symbol': '0x1',
            'name': '0x1.tools: AI Multi-tool'
        },
        {
            'id': '0xauto-io-contract-auto-deployer',
            'symbol': '0xa',
            'name': '0xAuto.io : Contract Auto Deployer'
        },
        {
            'id': '0xcoco',
            'symbol': 'coco',
            'name': '0xCoco'
        },
        {
            'id': '0xdao',
            'symbol': 'oxd',
            'name': '0xDAO'
        },
        {
            'id': '0xdao-v2',
            'symbol': 'oxd v2',
            'name': '0xDAO V2'
        },
        {
            'id': '0xmonero',
            'symbol': '0xmr',
            'name': '0xMonero'
        },
        {
            'id': '0xshield',
            'symbol': 'shield',
            'name': '0xShield'
        },
        {
            'id': '0xsniper',
            'symbol': '0xs',
            'name': '0xSniper'
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
                    <DataTable searchKey="name" columns={columns} data={formattedCryptocurrencies}/>
                </>

            </div>
        </div>
    );
};

export default DashboardPage;