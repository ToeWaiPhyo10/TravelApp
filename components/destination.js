import { View } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import DestinationCard from "./destinationCard";
import { useNavigation } from "@react-navigation/native";

export default function Destination() {
  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((data, index) => {
        return (
          <DestinationCard item={data} key={index} navigation={navigation} />
        );
      })}
    </View>
  );
}
