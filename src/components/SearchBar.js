import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Cari sesuatu..."}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    height: 45,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default SearchBar;