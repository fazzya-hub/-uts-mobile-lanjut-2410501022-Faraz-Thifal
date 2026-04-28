export const getTrendingBooks = async () => {
  try {
    const response = await fetch('https://openlibrary.org/trending/daily.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }

    const json = await response.json();
    return json.works;
  } catch (error) {
    console.error("DEBUG ERROR:", error);
    return []; 
  }
};

export const fetchBookDetail = async (bookId) => {
  try {
    const response = await fetch(`https://openlibrary.org${bookId}.json`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("DEBUG DETAIL ERROR:", error);
    throw error;
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const json = await response.json();
    return json.docs;
  } catch (error) {
    console.error("DEBUG SEARCH ERROR:", error);
    return [];
  }
};