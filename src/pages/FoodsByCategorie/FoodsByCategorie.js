import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch'
import FoodCard from '../../components/FoodCard/FoodCard';
import Loading from '../../components/Loading/Loading';

const FoodsByCategorie = ({ route, navigation }) => {
  const categories = route.params.category

  const { data, loading, error } = useFetch(Config.API_categoriesURL + `${categories}`)


  const handlePickMeal = (meals) => {
    navigation.navigate('Details', { meals })
  }

  const renderMeals = ({ item }) => <FoodCard food={item} onSelect={() => handlePickMeal(item.strMeal)} />

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return <Error />
  }
  return (
    <FlatList
      style={{ backgroundColor: '#ffa500' }}
      data={data.meals}
      renderItem={renderMeals}
      keyExtractor={item => item.idMeal}
    />
  )
}

export default FoodsByCategorie;
