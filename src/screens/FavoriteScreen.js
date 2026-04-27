import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import useFavoriteStore from '../context/favoriteStore';
import BookCard from '../components/BookCard';

const FavoriteScreen = ({ navigation }) => {
  const { favorites } = useFavoriteStore();

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Belum ada buku favorit.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <BookCard 
            item={item} 
            onPress={() => navigation.navigate('Detail', { bookId: item.key })} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default FavoriteScreen;