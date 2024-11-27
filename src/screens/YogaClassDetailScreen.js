import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailRow = ({ icon, label, value }) => (
  <View style={styles.detailRow}>
    <Ionicons name={icon} size={20} color="#5A8F7B" style={styles.icon} />
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const YogaClassDetail = ({ route }) => {
  const { classData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>{classData.type}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông tin khóa học</Text>
          <DetailRow
            icon="calendar-outline"
            label="Ngày"
            value={classData.dayOfWeek}
          />
          <DetailRow
            icon="time-outline"
            label="Thời gian"
            value={classData.time}
          />
          <DetailRow
            icon="hourglass-outline"
            label="Thời lượng"
            value={classData.duration}
          />
          <DetailRow
            icon="people-outline"
            label="Sức chứa"
            value={`${classData.capacity} người`}
          />
          <DetailRow icon="cash-outline" label="Giá" value={classData.price} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mô tả</Text>
          <Text style={styles.description}>{classData.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông tin lớp học</Text>
          <DetailRow
            icon="calendar-number-outline"
            label="Ngày"
            value={classData.date}
          />
          <DetailRow
            icon="person-outline"
            label="Giáo viên"
            value={classData.teacher}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edefe9",
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5A8F7B",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5A8F7B",
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    color: "#5A8F7B",
    fontWeight: "600",
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    color: "#3A4F41",
  },
  description: {
    fontSize: 16,
    color: "#3A4F41",
    lineHeight: 24,
  },
});

export default YogaClassDetail;
