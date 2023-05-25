import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './DetailsCard.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const DetailsCard = ({ info }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: info.strMealThumb }}
        style={styles.image}
      />
      <View style={styles.info_container}>
      
        <Text style={styles.title}>{info.strMeal}</Text>
        <Text style={styles.area}>{info.strArea}</Text>
        <View style={styles.separator} />
        <Text style={styles.info}>{info.strInstructions}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => Linking.openURL(info.strYoutube)} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default DetailsCard;
