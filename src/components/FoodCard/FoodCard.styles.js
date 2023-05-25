import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  food_container: {
    marginHorizontal: 10,
    marginVertical: 13,
    height: Dimensions.get('window').height / 4,
    borderRadius: 20,
  },
  foodImage: {
    flex: 1,
    height: Dimensions.get("window").height / 4,
  },
  food_back: {
    backgroundColor: 'black',
    opacity: 0.5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  food_title: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
});
