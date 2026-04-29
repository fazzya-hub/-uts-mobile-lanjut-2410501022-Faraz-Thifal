import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { getTrendingBooks } from '../services/api';
import BookCard from '../components/BookCard';

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); 
  const [error, setError] = useState(null);

  const loadData = async (isRefreshing = false) => {
    if (!isRefreshing) setLoading(true);
    
    try {
      const data = await getTrendingBooks();
      
      if (data && data.length > 0) {
        setBooks(data);
        setError(null);
      } else {
        setError("Data tidak ditemukan.");
      }
    } catch (err) {
      console.log("Error tertangkap:", err.message);
      setError("Jaringan koneksi terputus. Pastikan internet Anda menyala.");
      
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData(true);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Sedang mengambil data buku...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 40, marginBottom: 10 }}>bahaya</Text>
        <Text style={{ 
          color: '#333', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: 5 
        }}>
          {error}
        </Text>
        <Text style={{ color: '#888', marginBottom: 20 }}>
          Tarik layar ke bawah untuk mencoba lagi.
        </Text>
        <Text 
          style={{ color: '#0000ff', fontWeight: 'bold' }} 
          onPress={() => loadData()}
        >
          COBA LAGI
        </Text>
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
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            colors={['#0000ff']} 
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});

export default HomeScreen;