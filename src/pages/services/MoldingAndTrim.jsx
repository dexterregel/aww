import { Link } from 'react-router-dom';
import './services.css';

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

export default function MoldingAndTrim() {

  // generate preview images
  const backBandModules = getModules('back-band');
  const backBandPreviewImg = getImages(backBandModules)[0];

  const barRailModules = getModules('bar-rail');
  const barRailPreviewImg = getImages(barRailModules)[0];

  const baseBaordModules = getModules('base-board');
  const baseBoardPreviewImg = getImages(baseBaordModules)[0];

  const baseCapModules = getModules('base-cap');
  const baseCapPreviewImg = getImages(baseCapModules)[0];

  const casingsModules = getModules('casings');
  const casingsPreviewImg = getImages(casingsModules)[0];

  const chairRailModules = getModules('chair-rail');
  const chairRailPreviewImg = getImages(chairRailModules)[0];

  const coveFluteModules = getModules('cove-flute');
  const coveFlutePreviewImg = getImages(coveFluteModules)[0];

  const crownModules = getModules('crown');
  const crownPreviewImg = getImages(crownModules)[0];

  const handRailModules = getModules('hand-rail');
  const handRailPreviewImg = getImages(handRailModules)[0];

  const miscModules = getModules('misc');
  const miscPreviewImg = getImages(miscModules)[0];

  const panelModules = getModules('panel');
  const panelPreviewImg = getImages(panelModules)[0];

  const reededModules = getModules('reeded');
  const reededPreviewImg = getImages(reededModules)[0];

  const roundsModules = getModules('rounds');
  const roundsPreviewImg = getImages(roundsModules)[0];

  const shoeModules = getModules('shoe');
  const shoePreviewImg = getImages(shoeModules)[0];

  const tongueAndGrooveModules = getModules('tongue-and-groove');
  const tongueAndGroovePreviewImg = getImages(tongueAndGrooveModules)[0];

  return (
    <main>
      <h1>Molding and Trim</h1>
      <Link to='..' relative='path' className='back-button'>← Back to Services</Link>
      <div className='img-container'>
        <Link to='back-band'>
          {backBandPreviewImg}
          <p>Back band</p>
        </Link>
        <Link to='bar-rail'>
          {barRailPreviewImg}
          <p>Bar rail</p>
        </Link>
        <Link to='base-board'>
          {baseBoardPreviewImg}
          <p>Base board</p>
        </Link>
        <Link to='base-cap'>
          {baseCapPreviewImg}
          <p>Base cap</p>
        </Link>
        <Link to='casings'>
          {casingsPreviewImg}
          <p>Casings</p>
        </Link>
        <Link to='chair-rail'>
          {chairRailPreviewImg}
          <p>Chair rail</p>
        </Link>
        <Link to='cove-flute'>
          {coveFlutePreviewImg}
          <p>Cove/Flute</p>
        </Link>
        <Link to='crown'>
          {crownPreviewImg}
          <p>Crown</p>
        </Link>
        <Link to='hand-rail'>
          {handRailPreviewImg}
          <p>Hand rail</p>
        </Link>
        <Link to='misc'>
          {miscPreviewImg}
          <p>Misc</p>
        </Link>
        <Link to='panel'>
          {panelPreviewImg}
          <p>Panel</p>
        </Link>
        <Link to='reeded'>
          {reededPreviewImg}
          <p>Reeded</p>
        </Link>
        <Link to='rounds'>
          {roundsPreviewImg}
          <p>Rounds</p>
        </Link>
        <Link to='shoe'>
          {shoePreviewImg}
          <p>Shoe</p>
        </Link>
        <Link to='tongue-and-groove'>
          {tongueAndGroovePreviewImg}
          <p>Tongue and groove</p>
        </Link>
      </div>
    </main>
  );
}