import { useState, useEffect } from "react";
import "./index.css"

function Carousel() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost300/static/itens.json')
      .then((response) => response.json())
      .then(setData);
  }, [])

  if (!data || !data.length) return null;

  return (
    <div className="container">
      <div className="carousel">

        {data.map((item) => {
          const {id, name, image} = item;
          return (

            <div className="item" key={id}>
              <div className="imagem">
                <img src={image} alt="name" />
              </div>
              <div className="info">
                <span className="name">{name}</span>
              </div>
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}
export default Carousel;