const getRandomImage = () => {
    const imagePaths = [
      '/HTTPCAT/HTTP_100.avi',
      '/HTTPCAT/HTTP_101.avi',
      '/HTTPCAT/HTTP_102.avi',
      
    ];
  
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
  };
  
  export default getRandomImage;