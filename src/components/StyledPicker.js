import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const StyledPicker = ({ label, selectedValue, onValueChange, items }) => (
  <View style={styles.pickerContainer}>
    <Text style={styles.pickerLabel}>{label}</Text>
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {items.map((item) => (
          <Picker.Item key={item} label={item} value={item} />
        ))}
      </Picker>
    </View>
  </View>
);

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A8F7B",
    marginBottom: 4,
  },
  pickerWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#5A8F7B",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});

export default StyledPicker;
