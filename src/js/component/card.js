import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

//crear card component
const Card = () => {
    return (
        <div class="container-fluid d-flex ">

            <div class="row d-flex justify-content-center">
                <div className="card m-2" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>

                <div className="card m-2" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>

                <div className="card m-2" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>

                <div className="card m-2" style={{ width: "18rem" }}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>
            </div>

        </div>
    )
};

// exportar el componente
export default Card;
