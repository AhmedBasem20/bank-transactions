import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import ShadCN/UI Tabs component
import { TablePage } from "./components/transactions/TransactionsTable";
import CardInformation from "./components/card-information/cardInformation";

const App = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
    <Tabs defaultValue="cardInfo" >
      <TabsList className="flex justify-center mb-4">
        <TabsTrigger value="cardInfo">Card Information</TabsTrigger>
        <TabsTrigger value="tablePage">Transactions</TabsTrigger>
      </TabsList>

      <TabsContent value="cardInfo">
        <CardInformation />
      </TabsContent>
      <TabsContent value="tablePage">
        <TablePage />
      </TabsContent>
    </Tabs>
    </div>
  );
};

export default App;
