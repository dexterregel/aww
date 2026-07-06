

export default function Cabinetry() {

  const modules = import.meta.glob(
    '../../assets/images/cabinetry/*',
    { eager: true, query: 'url' }
  );
  console.log(Object.values(modules));

  const images = Object.values(modules).map(module => module.default);
  console.log('images', images);
  console.log('images', images);
  
  return (
    <main>
      <section>
        <h1>Cabinetry</h1>
        <p>Architectural Woodworking's Cabinetry Division is the perfect answer for everything from face frame and european style cabinetry to custom finishes and solid surfaces. We back all cabinetry work with a full selection of styles, materials, accessories, and finishes. Our Cabinetry Division allows you to take the guess work out of ordering by delivering exactly what you need. Remember when you are working with Architectural Woodworking, we have the expertise and on site facilities to provide you with the product you require!</p>
        <div>
          {images.map((image, index) => {
            return <img key={index} src={image} />
          })}
        </div>
      </section>
    </main>
  );
}