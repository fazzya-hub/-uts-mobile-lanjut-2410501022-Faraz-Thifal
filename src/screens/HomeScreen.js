import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getTrendingBooks } from '../services/api';
import BookCard from '../components/BookCard';

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("1. Memulai loadData di HomeScreen...");
        const data = await getTrendingBooks();
        
        console.log("2. Data yang diterima:", data ? data.length : 0, "buku");
        
        if (data && data.length > 0) {
          setBooks(data);
        } else {
          setError("Data kosong dari server.");
        }
      } catch (err) {
        console.log("3. Error tertangkap di HomeScreen:", err.message);
        setError("Gagal mengambil data. Cek koneksi internet.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Sedang mengambil data buku...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
        <Text style={{ fontSize: 12, color: '#888' }}>Coba restart Metro Bundler (tekan R)</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item, index) => item.key || index.toString()}
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
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});

export default HomeScreen;