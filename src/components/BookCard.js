import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const BookCard = ({ item, onPress }) => {
  const coverId = item.cover_i || (item.covers ? item.covers[0] : null);
  const imageUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` 
    : 'https://via.placeholder.com/150?text=No+Cover';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.author}>{item.author_name ? item.author_name[0] : 'Faraz Thifal'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 12, borderRadius: 10, elevation: 2, overflow: 'hidden' },
  image: { width: 80, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  author: { fontSize: 14, color: '#666' }
});

export default BookCard;