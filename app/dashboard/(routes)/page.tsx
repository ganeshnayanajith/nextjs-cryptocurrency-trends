const DashboardPage = () => {


  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">

        <>
          <div className="flex items-center justify-between">
            <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
          </div>
          <Separator />
          <DataTable searchKey="label" columns={columns} data={data} />
          <Heading title="API" description="API Calls for Billboards" />
          <Separator />
          <ApiList entityName="billboards" entityIdName="billboardId" />
        </>

      </div>
    </div>
  );
};

export default DashboardPage;