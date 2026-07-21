import Services from './Services.jsx';
import Cabinetry from './cabinetry/Cabinetry.jsx';
import Millwork from './millwork/Millwork.jsx';
import MoldingAndTrim from './moldingAndTrim/MoldingAndTrim.jsx';
import Catalog from './moldingAndTrim/Catalog.jsx';
import Woodturning from './woodturning/Woodturning.jsx';

Services.Cabinetry = Cabinetry;
Services.Millwork = Millwork;
Services.MoldingAndTrim = MoldingAndTrim;
Services.MoldingAndTrim.Catalog = Catalog;
Services.Woodturning = Woodturning;

export default Services;