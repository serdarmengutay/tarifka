import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./FoodCard.styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const FoodCard = ({ food, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}> 
    <View style={styles.food_container}>
      <ImageBackground
        source={{ uri: food.strMealThumb }}
        style={styles.foodImage}
        imageStyle={{ borderRadius: 15}}
      />
     <View style={styles.food_back}>
     <Text style={styles.food_title}>{food.strMeal}</Text>
        </View>
        
    </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
