
export const fetchBookDetail = async (bookKey) => {
  try {
    const response = await fetch(`https://openlibrary.org${bookKey}.json`);
    if (!response.ok) throw new Error('Gagal memuat detail buku');
    return await response.json();
  } catch (error) {
    throw error;
  }
};