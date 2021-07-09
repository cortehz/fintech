import * as React from "react";
import { ScrollView, View, Text } from "react-native";
import styled from "styled-components/native";

interface Spent {
  spent: number;
}

const Txt = styled.Text<Spent>`
  color: ${(props) => (props.spent < 0 ? "#501e1d" : "#1d4932")};
`;

const Card = styled.View<Spent>`
  justify-content: space-between;
  background-color: ${(props) => (props.spent < 0 ? "#fff4f6" : "#ebfaf0")};
  padding: 20px;
  border-radius: 10px;
  min-width: 150px;
  height: 150px;
  margin-right: 10px;
`;

const data = [
  {
    id: 0,
    month: "July",
    incoming: 555,
    outgoing: 400,
  },

  {
    id: 1,
    month: "August",
    incoming: 1000,
    outgoing: 1400,
  },
  {
    id: 2,
    month: "December",
    incoming: 1555,
    outgoing: 3400,
  },
  {
    id: 3,
    month: "December",
    incoming: 1555,
    outgoing: 3400,
  },
  {
    id: 4,
    month: "December",
    incoming: 1555,
    outgoing: 3400,
  },
];

const totalSpend = (incoming: number, outgoing: number) => {
  return incoming - outgoing;
};

const Analytics: React.FC = () => {
  return (
    <>
      <Text style={{ marginTop: 20, marginBottom: 15, fontSize: 18 }}>
        Analytics
      </Text>
      <ScrollView horizontal={true}>
        {data.map(({ incoming, id, month, outgoing }) => {
          return (
            <Card spent={totalSpend(incoming, outgoing)} key={id}>
              <View>
                <Txt spent={totalSpend(incoming, outgoing)}>{month}</Txt>
                <Txt spent={totalSpend(incoming, outgoing)}>Total spend</Txt>
              </View>

              <Txt spent={totalSpend(incoming, outgoing)}>
                {totalSpend(incoming, outgoing)}
              </Txt>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Analytics;
