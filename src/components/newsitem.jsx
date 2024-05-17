import image from '../assets/img.png';

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"200px",width:"320px"}}className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text"> {description?description.slice(0,90):" Get the latest news and breaking news updates on Business, Politics, Sports, Entertainment news ."}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  )
}

export default NewsItem
