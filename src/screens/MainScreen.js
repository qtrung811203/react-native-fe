import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//Custom components
import StyledPicker from "../components/StyledPicker";
import YogaClassItem from "../components/YogaClassItem";

//FAKE DATA
const YOGA_CLASSES = [
  {
    id: "1",
    type: "Hatha Yoga",
    dayOfWeek: "Monday",
    teacher: "Nguyen Thi An",
    time: "18:00 - 19:30",
    duration: "90 minutes",
    capacity: 20,
    price: "200,000 VND",
    description:
      "Hatha Yoga class focuses on basic postures and breathing techniques, suitable for beginners.",
    date: "2023-06-05",
  },
  {
    id: "2",
    type: "Vinyasa Flow",
    dayOfWeek: "Wednesday",
    teacher: "Tran Van Binh",
    time: "17:30 - 19:00",
    duration: "90 minutes",
    capacity: 15,
    price: "250,000 VND",
    description:
      "Vinyasa Flow is a dynamic yoga style that links breath with movement.",
    date: "2023-06-07",
  },
  {
    id: "3",
    type: "Yin Yoga",
    dayOfWeek: "Friday",
    teacher: "Le Thi Cuc",
    time: "19:00 - 20:30",
    duration: "90 minutes",
    capacity: 25,
    price: "180,000 VND",
    description:
      "Yin Yoga focuses on holding postures for extended periods, increasing flexibility and deep relaxation.",
    date: "2023-06-09",
  },
  {
    id: "4",
    type: "Ashtanga Yoga",
    dayOfWeek: "Saturday",
    teacher: "Pham Van Dung",
    time: "07:00 - 08:30",
    duration: "90 minutes",
    capacity: 18,
    price: "300,000 VND",
    description:
      "Ashtanga Yoga is a powerful and structured yoga style, suitable for experienced practitioners.",
    date: "2023-06-10",
  },
];

const DAYS_OF_WEEK = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const TIME_SLOTS = [
  "All",
  "Morning (6:00 - 12:00)",
  "Afternoon (12:00 - 18:00)",
  "Evening (18:00 - 22:00)",
];

//Dùng useEffect để get dữ liệu, set state một dữ liệu class

const MainScreen = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedTime, setSelectedTime] = useState("All");

  const handleClassPress = (item) => {
    navigation.navigate("YogaClassDetail", { classData: item });
  };

  const filterClasses = useCallback(() => {
    return YOGA_CLASSES.filter((yogaClass) => {
      const dayMatch =
        selectedDay === "All" || yogaClass.dayOfWeek === selectedDay;
      let timeMatch = selectedTime === "All";
      if (!timeMatch) {
        const classStartTime = parseInt(yogaClass.time.split(":")[0]);
        if (
          selectedTime === "Morning (6:00 - 12:00)" &&
          classStartTime >= 6 &&
          classStartTime < 12
        )
          timeMatch = true;
        if (
          selectedTime === "Afternoon (12:00 - 18:00)" &&
          classStartTime >= 12 &&
          classStartTime < 18
        )
          timeMatch = true;
        if (
          selectedTime === "Evening (18:00 - 22:00)" &&
          classStartTime >= 18 &&
          classStartTime < 22
        )
          timeMatch = true;
      }
      return dayMatch && timeMatch;
    });
  }, [selectedDay, selectedTime]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.header}>Yoga Class List</Text>
      <View style={styles.filtersContainer}>
        <StyledPicker
          label="Day of Week"
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
          items={DAYS_OF_WEEK}
        />
        <StyledPicker
          label="Time of Day"
          selectedValue={selectedTime}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
          items={TIME_SLOTS}
        />
      </View>
      <FlatList
        data={filterClasses()}
        renderItem={({ item }) => (
          <YogaClassItem item={item} onPress={() => handleClassPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edefe9",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5A8F7B",
    textAlign: "center",
    marginVertical: 20,
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

export default MainScreen;
