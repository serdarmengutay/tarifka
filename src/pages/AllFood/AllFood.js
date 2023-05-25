import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const AllFood = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_URL)

  const handleSelectCategory = (category) => {
      navigation.navigate('Meals', {category})
  }

const renderFood = ({ item }) => <CategoryCard categories={item} onSelect={() => handleSelectCategory(item.strCategory)} />

  if(loading){
    return <Loading />
  } 
  if(error){
    return <Error />
  }

  return (
      <FlatList
      style={styles.container}
      data={data.categories}
      renderItem={renderFood}
      keyExtractor={(item) => item.idCategory}
      />
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa500',
  }
})


export default AllFood;
