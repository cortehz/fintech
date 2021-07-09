import React from "react";
import Layout from "../Layout";
import Analytics from "./Analytics";
import RecentTransactions from "./RecentTransaction";

export interface AccountProps {}

const Accounts: React.FC<AccountProps> = () => {
  return (
    <Layout>
      <RecentTransactions />
      <Analytics />
    </Layout>
  );
};

export default Accounts;
