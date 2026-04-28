import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { searchBooks } from '../services/api';
import BookCard from '../components/BookCard';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (text) => {
    setQuery(text);
    
    if (text.length < 3) {
      setResults([]);
      setError('Ketik minimal 3 karakter...');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const data = await searchBooks(text);
      setResults(data);
    } catch (err) {
      setError('Terjadi kesalahan saat mencari.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari judul buku..."
        value={query}
        onChangeText={handleSearch}
      />
      
      {error ? <Text style={styles.infoText}>{error}</Text> : null}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      <FlatList
  data={results}
  keyExtractor={(item) => item.key}
  renderItem={({ item }) => (
    <BookCard 
      item={{
        key: item.key,
        title: item.title,
        cover_i: item.cover_i 
      }} 
      onPress={() => navigation.navigate('Detail', { bookId: item.key })} 
    />
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  searchBar: { height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 10 },
  infoText: { textAlign: 'center', color: '#888', marginTop: 10 }
});

export default SearchScreen;