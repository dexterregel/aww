// get images based on the module
// export function getImages(modules) {
//   const images = Object.values(modules).map((path, index) => {
//     return <img key={index} src={path.default} />;
//   });
//   return images;
// }

// takes an array of paths and a parent dir, and returns an array of the child directories found under parentDir
export function getChildDirs(paths, parentDir) {
  const parentDirIndex = paths[0].split('/').indexOf(parentDir);
  const set = new Set();
  for (const path of paths) {
    set.add((path.split('/')[parentDirIndex + 1]));
  }
  // convert the set back to an array and return it
  return Array.from(set);
}

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

// gets the modules of all files under the molding-and-trim dir
export function getMoldingTrimModules() {
  const moldingTrimModules = import.meta.glob(
    '/src/assets/images/molding-and-trim/**/*',
    { eager: true }
  );
  return moldingTrimModules;
}

// gets data for all of the images under the molding-and-trim dir
export function getMoldingTrimImgData() {
  const moldingTrimModules = getMoldingTrimModules();
  // this is a large array of abs paths to all files under the molding-and-trim dir
  const moldingTrimImgAbsPaths = Object.keys(moldingTrimModules);
  const moldingTrimChildDirs = getChildDirs(moldingTrimImgAbsPaths, 'molding-and-trim');

  const moldingTrimArr = [];
  for (const moldingTrimType of moldingTrimChildDirs) {
    const moldingTrimObj = {}
    moldingTrimObj.type = moldingTrimType;
    moldingTrimObj.images = moldingTrimImgAbsPaths.filter(absPath => {
      return absPath.includes(moldingTrimType);
    });
    moldingTrimArr.push(moldingTrimObj);
  }
  return moldingTrimArr;
}