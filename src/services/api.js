export const fetchTrendingBooks = async () => {
  try {
    const response = await fetch('https://openlibrary.org/trending/daily.json');
    if (!response.ok) throw new Error('Gagal mengambil data');
    const data = await response.json();
    return data.works;
  } catch (error) {
    throw error;
  }
};