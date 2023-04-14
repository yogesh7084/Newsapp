import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img className="card-img-top" src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <center><a href = {newsUrl} target = "_blank" className="btn btn-sm btn btn-dark" > Read more..</a></center>

          </div>
        </div>
      </div>
    );
  }
}


// export default NewsItem

// export default function NewsItem() {
//   return (
//     <div>
//       <div className="card" style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </div>
//   );
//   {
//     /*
//       <div>
//         <div className="card"   style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//       {/* <div className="card"   style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//       <div className="card"   style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//       <div className="card"    style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>

//       <div className="card"  s style={{ width: "18rem" }}>
//         <img className="card-img-top" src="..." alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//       </div> */
//   }
// }
