
import { Link } from "react-router-dom";

const Categories = ({ imageUrl, description, price, name, productId }) => {
  return (

<section className="categories">
<div className="container">
    <div className="row">
        <div className="categories__slider owl-carousel">
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/original3.jpeg">
                <h5><Link to="/pages/desire">Buzzcaf Desire</Link></h5> 
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/original1.jpeg">
                    <h5><Link to="/pages/original">Original</Link></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/chocolate1.jpeg">
                    <h5><Link to="/pages/belgianChocolate">Chocolate</Link></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/caramel.jpeg">
                    <h5><Link to="/pages/caramel">Caramel</Link></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/hazelnut1.jpeg">
                    <h5><Link to="/pages/irishHazelnut">Hazelnut</Link></h5>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  );
};    

export default Categories;