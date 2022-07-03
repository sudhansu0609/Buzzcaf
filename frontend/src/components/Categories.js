
import { Link } from "react-router-dom";

const Categories = ({ imageUrl, description, price, name, productId }) => {
  return (

<section className="categories">
<div className="container">
    <div className="row">
        <div className="categories__slider owl-carousel">
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-1.jpg">
                    <h5><a href="#">Buzzcaf Desire</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-2.jpg">
                    <h5><a href="#">Original</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-3.jpg">
                    <h5><a href="#">Chocolate</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-4.jpg">
                    <h5><a href="#">Caramel</a></h5>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="categories__item set-bg" data-setbg="assets/img/categories/cat-5.jpg">
                    <h5><a href="#">Hazelnut</a></h5>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  );
};    

export default Categories;