// get modules based on the dir
export function getModules(dir) {
  const modules = import.meta.glob('/src/assets/images/molding-and-trim/**', { eager: true });
  // convert to an array and filter it based on dir
  const filteredModules = Object.entries(modules).filter(
    module => module[0].includes(dir)
  );
  // convert back to an object and return
  return Object.fromEntries(filteredModules);
}

// get images based on the module
// export function getImages(modules) {
//   const images = Object.values(modules).map((path, index) => {
//     return <img key={index} src={path.default} />;
//   });
//   return images;
// }

// returns the file name from an absolute path
// by default it includes the file extension
export function getFileNameFromPath(path, getFileExt = true) {
  let fileName = path.split('/')[path.split('/').length - 1];
  if (!getFileExt) {
    fileName = fileName.split('.')[0];
  }
  return fileName;
}

// get images and use their filename as a caption
export function getImages(modules) {
  const images = [];
  // for each module,
  images.push(Object.values(modules).map((path) => {
    const imageName = getFileName(path.default);
    return {
      imageName: imageName,
      imagePath: path.default
    }
  }));
  return images;
}