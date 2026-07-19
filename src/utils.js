import { XMLParser } from 'fast-xml-parser';

/*
  vars
*/

/*
  functions
*/
// takes an array of paths and a parent dir, and returns an array of the child directories found under parentDir
export function getChildDirs(parentDir, paths) {
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

// gets the contents of the specified public s3 bucket
// returns an xml doc
export async function getBucketContents(bucketName) {
  try {
    const res = await fetch(`http://s3.amazonaws.com/${bucketName}`);
    if (res.ok) {
      const data = await res.text();
      return data;
    }
  } catch (err) {
    console.error(err.message);
  }
}

// the bucketContents param expects an xml doc
export async function getFilteredBucketContents(bucketName, filter) {
  const parser = new XMLParser();
  const json = parser.parse(bucketContents);
  const filteredBucketContents = json.ListBucketResult.Contents
    .map(image => image.Key)
    .filter(image => {
      // filter out the result that isn't a file
      if (image === `images/${filter}/` || image === `images/gallery/${filter}/`) {
        return false;
      }
      return image.includes(filter);
    });
  return filteredBucketContents;
}


// gets data from the specified public s3 bucket
// returns an xml doc
export async function getBucketData(bucketName) {
  const bucketUrl = `http://s3.amazonaws.com/${bucketName}`;
  try {
    const res = await fetch(bucketUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${bucketName}: ${res.status}`)
    }
    const xmlData = await res.text();
    // parse the returned data
    const parser = new XMLParser();
    const jsonData = parser.parse(xmlData);
    return jsonData;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getFilteredBucketData(
  filter,
  bucketName = 'aww-assets-961743401958-us-east-1-an'
) {
  const bucketData = await getBucketData(bucketName);
  // parse the returned data based on the supplied filter

  const filteredBucketData = bucketData.ListBucketResult.Contents
    .map(image => image.Key)
    .filter(image => {
      // filter out results that are dirs
      if (image.charAt(image.length - 1) === '/') {
        return false;
      }
      return image.includes(filter);
    });
  return filteredBucketData;
}

export function getImageUrl(
  path,
  bucketName = 'aww-assets-961743401958-us-east-1-an',
  bucketRegion = 'us-east-1'
) {
  return `http://${bucketName}.s3.${bucketRegion}.amazonaws.com/${path}`;
}

/*
  This function accepts an array of image paths, and the name of a parent directory.
  It returns an array of objects, where the properties of each object are
  the name of the child directory under the specified parent,
  and the first image path inside of the child directory.
  For example, if imagePaths is passed in with the following structure:
    parentDir/
      childDir1/
        /img1.jpg
        /img2.jpg
      childDir2/
        img3.jpg
        img4.jpg
  and "parentDir" is passed in as the argument, the function will return the following array:
    [
      {
        dir: "childDir1",
        absPath: "parentDir/childDir1/img1.jpg"
      },
      {
        dir: "childDir2",
        absPath: "parentDir/childDir2/img3.jpg"
      }
    ]
  This function is intended for creating preview elements.
*/
export function getFirstImagePaths(parentDir, imagePaths) {
  const childDirs = getChildDirs(parentDir, imagePaths);
  const firstImagePaths = [];
  childDirs.forEach(dir => {
    const firstImage = {}
    firstImage.dir = dir;
    firstImage.absPath = imagePaths.find(path => path.includes(dir));
    firstImagePaths.push(firstImage);
  });
  return firstImagePaths;
}

/*
  Formats the supplied string into a title.
*/
export function formatToTitle(string) {
  return string.charAt(0).toUpperCase() + string.replaceAll('-', ' ').slice(1);
}