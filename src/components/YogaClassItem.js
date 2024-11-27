import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const YogaClassItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.itemHeader}>
      <Text style={styles.title}>{item.type}</Text>
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.detailRow}>
        <Ionicons name="calendar-outline" size={16} color="#5A8F7B" />
        <Text style={styles.details}>{item.dayOfWeek}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons name="time-outline" size={16} color="#5A8F7B" />
        <Text style={styles.details}>{item.time}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons name="person-outline" size={16} color="#5A8F7B" />
        <Text style={styles.details}>{item.teacher}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemHeader: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A8F7B",
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  details: {
    fontSize: 16,
    color: "#3A4F41",
    marginLeft: 8,
  },
});

export default YogaClassItem;
