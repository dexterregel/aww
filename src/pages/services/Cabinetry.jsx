
export default function Cabinetry() {

  // import images in dir
  // const modules = import.meta.glob(
  //   '../../assets/images/cabinetry/*',
  //   { eager: true, query: 'url' }
  // );

  // const gallery = Object.values(import.meta.glob('/*', { eager: true, query: 'url'}));
  // for (const path in modules) {
  //   const p = new URL(path, import.meta.url).href;
  //   gallery.push(p);
  // }

  const gallery = Object.values(import.meta.glob('/public/images/*', { eager: true, query: 'url' }));
  console.log(gallery);

  return (
    <main>
      <section>
        <h1>Cabinetry</h1>
        <p>Architectural Woodworking's Cabinetry Division is the perfect answer for everything from face frame and european style cabinetry to custom finishes and solid surfaces. We back all cabinetry work with a full selection of styles, materials, accessories, and finishes. Our Cabinetry Division allows you to take the guess work out of ordering by delivering exactly what you need. Remember when you are working with Architectural Woodworking, we have the expertise and on site facilities to provide you with the product you require!</p>
        <div>
          {gallery.map((path, index) => {
            return <img key={index} src={path.default} />
          })}
        </div>
      </section>
    </main>
  );
}