import React from 'react';
import { FlatList, View } from 'react-native'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import styles from './Details.styles';
import Config from 'react-native-config';
import DetailsCard from '../../components/DetailsCard/DetailsCard';

const Details = ({ route }) => {
  const details = route.params.meals

  const { data, error, loading } = useFetch(Config.API_recipeURL + `${details}`)

  const renderInfo = ({ item }) => <DetailsCard info={item} />

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
      data={data.meals}
      renderItem={renderInfo}
      keyExtractor={(item) => item.idMeal}
    />
  )
}

export default Details;
