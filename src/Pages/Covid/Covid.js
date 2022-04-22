import Header from '../../Layouts/Header';
import Card from '../../UI/Card';
import HighTemperature from '../../Assets/images/highTemperature.png';
import HadCovid from '../../Components/02-inputs/HadCovid';
import Antibodies from '../../Components/02-inputs/Antibodies';
import Date from '../../Components/02-inputs/Date';
import Count from '../../Components/02-inputs/Count';
function Covid(props) {
  return (
    <Card>
      <Header page='2' />
      <form className='flex flex-col gap-14 w-168'>
        <HadCovid />
        <Antibodies />
        <Date />
        <Count />
      </form>
      <div className='absolute right-40 top-28'>
        <img src={HighTemperature} alt='sick boy' className='pt-20' />
        <div className='bg-red-500 h-56 w-56 rounded-full absolute top-86 left-24 mix-blend-multiply'></div>
      </div>
    </Card>
  );
}

export default Covid;
