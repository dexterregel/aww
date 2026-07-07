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

  return (
    <main>
      <Link to='..' relative='path'>← Back to molding and trim</Link>
      <h1>{params.type}</h1>
      {images}
    </main>
  );
}