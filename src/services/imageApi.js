export const getPhotos = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
