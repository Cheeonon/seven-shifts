import './TraitsPage.scss';
import Dashboard from '../../components/Dashboard/Dashboard';
import TraitCompatibility from '../TraitCompatibility/TraitCompatibility';

const TraitsPage = () => {
  return (
   <>
        <div className="content">
            <Dashboard />
            <TraitCompatibility />
        </div>
   </>
  )
}

export default TraitsPage