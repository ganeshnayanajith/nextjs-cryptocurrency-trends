import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const TrendingPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">

        <>
          <div className="flex items-center justify-between">
            <Heading title="Trending Cryptocurrencies" description="See a list of trending cryptocurrencies"/>
          </div>
          <Separator/>
        </>

      </div>
    </div>
  );
};

export default TrendingPage;