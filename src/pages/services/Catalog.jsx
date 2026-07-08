import { useParams, Link } from 'react-router-dom';

function getModules(dir) {
  const modules = import.meta.glob('/src/assets/images/molding-and-trim/**', { eager: true });
  // convert to an array and filter based on dir
  const filteredModules = Object.entries(modules).filter(
    module => module[0].includes(dir)
  );

  // convert back to an object and return
  return Object.fromEntries(filteredModules);
}

function getImages(modules) {
  const images = Object.values(modules).map((path, index) => {
    return <img key={index} src={path.default} />;
  });
  return images;
}

export default function Catalog() {
  const params = useParams();

  const modules = getModules(params.type);
  const images = getImages(modules);

  const pageTitle = params.type[0].toUpperCase() + params.type.replaceAll('-', ' ').slice(1);
  console.log(pageTitle);

  return (
    <main>
      <h1>{pageTitle}</h1>
      <Link to='..' relative='path'>← Back to Molding and Trim</Link>
      {images}
    </main>
  );
}