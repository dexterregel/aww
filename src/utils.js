import { XMLParser } from 'fast-xml-parser';

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

// gets the contents of the specified public bucket
// returns an xml doc
export async function getBucketContents(bucketName) {
  const res = await fetch(`http://s3.amazonaws.com/${bucketName}`);
  const data = await res.text();
  return data;
}

// the bucketContents param expects an xml doc
export function getFilteredBucketContents(bucketContents, filter) {
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