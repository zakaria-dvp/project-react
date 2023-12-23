import image1 from '../one.jpg'
import image2 from '../two.jpg'
import image3 from '../three.jpg'
import '../components/Card.css'
export const Card = ()=>{
  return( 
    <div className='parent'>
<div className="card" style={{width: '18rem'}}>
  <img src={image1} />
  <div className="card-body card-color">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={image2} />
  <div className="card-body ">
    <h5 className="card-title mt-50">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={image3} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
)
}
