import * as React from "react";
import {
  View,
  Text,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  Image,
} from "react-native";
import { Row } from "../header/Header.style";

interface Transaction {
  id: number;
  transactionCategory: string;
  transactionAmount: string;
  userProfile: string;
  transactionDate: string;
}

export const transcactionList = [
  {
    id: 0,
    transactionCategory: "Withdrawal",
    transactionAmount: "500",
    userProfile:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    transactionDate: "Jul. 10",
  },

  {
    id: 1,
    transactionCategory: "Withdrawal",
    transactionAmount: "450",
    userProfile:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    transactionDate: "Jun. 12",
  },
  {
    id: 2,
    transactionCategory: "Withdrawal",
    transactionAmount: "1500",
    userProfile:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    transactionDate: "Aug. 2",
  },

  {
    id: 3,
    transactionCategory: "Withdrawal",
    transactionAmount: "450",
    userProfile:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    transactionDate: "May 1",
  },
];

export interface RecentTransactionsProps {}

const RecentTransactions: React.FC<RecentTransactionsProps> = () => {
  return (
    <View style={{ marginTop: 25 }}>
      <Row>
        <Text>Recent Transaction</Text>
        <Button
          title="See all"
          onPress={(ev: NativeSyntheticEvent<NativeTouchEvent>) => {
            console.log(ev);
          }}
        />
      </Row>

      <View>
        {transcactionList.map((transaction: Transaction, idx) => {
          return (
            <Row key={idx}>
              <Row>
                <Image
                  source={{ uri: transaction.userProfile }}
                  style={styles.transactionImage}
                />
                <View>
                  <Text style={styles.textBold}>
                    {transaction.transactionCategory}
                  </Text>
                  <Text style={{ color: "#999", marginTop: 5 }}>
                    {transaction.transactionDate}
                  </Text>
                </View>
              </Row>

              <Text>{transaction.transactionAmount}</Text>
            </Row>
          );
        })}
      </View>
    </View>
  );
};

export default RecentTransactions;

const styles = StyleSheet.create({
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textBold: {
    fontWeight: "600",
    fontSize: 18,
  },
});
