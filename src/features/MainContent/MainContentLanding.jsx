 
import CardChip from '../../components/cardChip/CardChip';
import Group1 from './Group1'
import Group2 from './Group2'
const MainContentLanding = () =>{
  return (
      <div className="row col-lg-12 container"  style={{marginLeft: '133px'}}>
        <div className="col-lg-6">
        <Group1/>
        </div>
        <div className="col-lg-6">
        <Group2/>
         </div>
      </div>
 
   )
}

export default MainContentLanding;
