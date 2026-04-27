import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { fetchBookDetail } from '../services/api';
import useFavoriteStore from '../context/favoriteStore';

const DetailScreen = ({ route, navigation }) => {
  const { bookId } = route.params; 
  
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addFavorite, removeFavorite, favorites } = useFavoriteStore();
  
  const isFavorite = favorites.some((fav) => fav.key === bookId);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const data = await fetchBookDetail(bookId);
        setBook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getDetail();
  }, [bookId]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(bookId);
    } else {
      addFavorite({
        key: bookId,
        title: book.title,
        covers: book.covers,
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderDescription = () => {
    if (!book.description) return "Tidak ada deskripsi tersedia.";
    if (typeof book.description === 'string') return book.description;
    return book.description.value;
  };

  return (
    <ScrollView style={styles.container}>
      {book.covers && (
        <Image 
          source={{ uri: `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` }} 
          style={styles.cover}
        />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        
        <TouchableOpacity 
          style={[styles.favButton, isFavorite ? styles.btnRemove : styles.btnAdd]} 
          onPress={handleToggleFavorite}
        >
          <Text style={styles.favButtonText}>
            {isFavorite ? " Hapus dari Favorit" : " Tambah ke Favorit"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.descriptionTitle}>Deskripsi:</Text>
        <Text style={styles.descriptionText}>{renderDescription()}</Text>
        
        <View style={styles.footer}>
          <Text style={styles.identity}>Faraz Thifal - 2410501022</Text>
          <Button title="Kembali" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cover: { width: '100%', height: 400, resizeMode: 'contain', backgroundColor: '#f0f0f0' },
  infoContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },

  favButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnAdd: { backgroundColor: '#007AFF' },
  btnRemove: { backgroundColor: '#FF3B30' },
  favButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  descriptionText: { fontSize: 16, lineHeight: 24, color: '#444', textAlign: 'justify' },
  footer: { marginTop: 30, paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#eee' },
  identity: { textAlign: 'center', color: '#888', marginBottom: 10, fontSize: 12 }
});

export default DetailScreen;