import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../sass/main/ProductDetails.scss";
import ShopOptions from "../menu/ShopOptions";
import Footer from "./Footer";
import store from "../../../redux/store";
import { TweenMax } from "gsap";

const ProductDetails = () => {
  // STATE
  const [selectSize, useSelectSize] = useState("");
  const [selectedProducts, setSelectedProducts] = useState(0);
  const title = [
    "Curabitur massa felis, placerat in urna a, venenatis varius quam.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Ut dictum dignissim feugiat. Mauris condimentum augue mauris, ac dapibus dui feugiat sed."
  ];
  const content = [
    "ipsum dolor sit amet, consectetur adipiscing elit. Donec ex urna, faucibus ornare orci sit amet, viverra tristique orci. Fusce malesuada vitae risus a congue. Cras orci lorem, aliquam et purus id, luctus consectetur neque. Nullam gravida suscipit maximus. Etiam varius felis et tempor maximus. Donec blandit lacus nec fermentum dignissim. Vestibulum in lobortis justo.",
    "Curabitur massa felis, placerat in urna a, venenatis varius quam. Vestibulum eu mi justo. Duis nec nulla tellus. Ut quis fringilla elit. Phasellus aliquam lectus vel purus elementum, non ultricies augue maximus. Duis consequat a eros ut rutrum. Quisque malesuada augue a tortor volutpat consectetur. Vivamus non euismod diam. Proin arcu libero, tristique et sapien vitae, blandit varius ex. Pellentesque placerat mi non metus tincidunt, in fringilla arcu imperdiet. Vestibulum accumsan, magna nec commodo iaculis, orci neque rutrum sem, at euismod odio nulla nec tortor. In hac habitasse platea dictumst. Nulla nec mauris non nisi gravida maximus. Nullam convallis varius neque, et viverra libero dictum in.",
    "Ut dictum dignissim feugiat. Mauris condimentum augue mauris, ac dapibus dui feugiat sed. Ut fermentum ut elit sed convallis. Aliquam vitae magna urna. Aliquam ultricies sagittis velit, ac iaculis odio facilisis nec. Mauris tincidunt odio ut imperdiet suscipit. Sed a cursus justo, sed aliquet dolor. Morbi eget augue porttitor, congue lorem ut, iaculis nisi. Donec dignissim lorem sem, et faucibus massa tristique eu. Vivamus nec elit nulla. Fusce scelerisque rhoncus lorem, a gravida ligula facilisis molestie. Nam vulputate tempor placerat. Vestibulum sed dui lorem. In at maximus enim."
  ];
  const [text, setText] = useState(0);
  // REF
  const selectSizeItems = useRef(null);
  let btnIcon = useRef(null);

  const history = useHistory();

  // REDUX STATE
  const productDetails = useSelector(
    state => state.productsDeatilsReducer.products
  );

  const buyShopProduct = useSelector(
    state => state.buyProductsReducer.products
  );

  const handleChangeContent = index => {
    setText(index);
  };




  return (
    <>
      <div className="product-wrapper">
        <ShopOptions />
        <button
          className="product-exit"
          onClick={() => {
            history.push(`/mainSide/home/All`);
          }}
        >
          <span className="fas fa-arrow-left product-favourite-icon"></span>
        </button>
        <div className="product-details">
          <div className="product-details__picture">
            <img
              src={productDetails[0].src}
              alt="product-img"
              className="product-details__img"
            />
          </div>
          <div className="product-details__container">
            {/* TYTUŁ */}
            <div className="product-title">
              <h1 className="product-title__title">
                {productDetails[0].type + " "}
                {productDetails[0].brand}
              </h1>
              <div className="product__rating">
                <span className="fa fa-star checked product__rating-checked"></span>
                <span className="fa fa-star checked product__rating-checked"></span>
                <span className="fa fa-star checked product__rating-checked"></span>
                <span className="fa fa-star checked product__rating-checked"></span>
                <span className="fa fa-star checked product__rating-no_checked"></span>
                <b className="product__rating-reviews">(21 opinii)</b>
              </div>
              <div className="product-title__info">
                <span className="product-title__info-details">
                  od:
                  <b className="product-title__info-company">
                    {productDetails[0].brand}
                  </b>
                </span>
              </div>
            </div>

            {/* INFO O PROD / DOD DO KOSZYKA */}
            <div className="product-buying">
              {/*INFO O PROD  */}
              <div className="product-buying__info">
                <ul className="product-buying__info-list">
                  <li className="product-buying__info-item">
                    rozmiar:
                    <span className="product-buying__info-details">
                      {productDetails[0].size}
                    </span>
                  </li>
                  <li className="product-buying__info-item">
                    kolor:{" "}
                    <span className="product-buying__info-details">
                      {productDetails[0].color}
                    </span>
                  </li>
                  <li className="product-buying__info-item">
                    dla:{" "}
                    <span className="product-buying__info-details">
                      {productDetails[0].sex}
                    </span>
                  </li>
                </ul>
              </div>
              {/* DODAWANIE DO KOSZYKA */}
              <div className="product-buying__options">
                {selectedProducts >= 3 ? (
                  <span className="product-buying__options--error">
                    Tylko 4 produkty w magazynie!
                  </span>
                ) : null}
                <span className="product-buying__options-promotion">
                  oszczędź 100.00$
                </span>

                <div className="product-buying__options-price">
                  <span className="product-buying__options-price_old">
                    {parseInt(productDetails[0].price) + 100},00 $
                  </span>
                  <span className="product-buying__options-price_value">
                    {productDetails[0].price},00 $
                  </span>
                </div>
                <div className="product-buying__options-shopping">
                  <select
                    name="sizes"
                    className="form-control  product-buying__options-shopping_size"
                    value={selectSize}
                    onChange={e => useSelectSize(e.target.value)}
                    ref={selectSizeItems}
                  >
                    <option value="rozmiar">rozmiar</option>
                    {productDetails[0].type === "buty" ? (
                      <>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                      </>
                    ) : (
                      <>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </>
                    )}
                  </select>
                  <button
                    className="product-buying__options-shopping_add"
                    onClick={() => {
                      if (!selectSize || selectSize === "rozmiar") {
                        // NO CHOICE FROM USER

                        selectSizeItems.current.className =
                          "form-control  product-buying__options-shopping_size form-control  product-buying__options-shopping_size--active";
                      } else {
                        // USER CHOOSEN
                        selectSizeItems.current.className =
                          "form-control  product-buying__options-shopping_size form-control";

                        //COPY OBJECT FROM PRODUCT
                        const newObject = Object.assign({}, productDetails[0]);
                        newObject.counter = 1; // SETTING COUNTER
                        newObject.size = selectSize; // SETTING SIZE

                        // THE SAME PRODUCTS IN STORE
                        const theSameProducts = buyShopProduct.filter(
                          product => {
                            if (product.id === newObject.id) return product;
                          }
                        );

                        // ADDING SAME PRODUCTS TO STORE - REDUX
                        if (theSameProducts && theSameProducts.length !== 0) {
                          let maxCounter = buyShopProduct.find(
                            product => product.counter >= 3
                          );

                          maxCounter !== undefined
                            ? (maxCounter = "")
                            : store.dispatch({
                                type: "ADD_THE_SAME_PRODUCT",
                                product: theSameProducts
                              });
                        }
                        // ADDING ONLY ONE PRODUCT TO STORE - REDUX
                        else
                          store.dispatch({
                            type: "ADD_TO_SHOP_LIST",
                            product: newObject
                          });
                        history.push("/shopping-list/new_product");
                        window.scrollTo(0, 0);

                        TweenMax.fromTo(
                          btnIcon,
                          0.3,
                          { fontSize: 16 },
                          { fontSize: 20 }
                        );
                      }
                    }}
                  >
                    <span
                      className="fas fa-cart-plus product-buying__options-shopping_add-icon"
                      ref={element => (btnIcon = element)}
                    ></span>{" "}
                    <span className="product-buying__options-shopping_add-text">
                      Dodaj do koszyka
                    </span>
                  </button>
                </div>

                <div className="product-buying__transport">
                  <div className="product-buying__transport-product">
                    <span className="fas fa-shipping-fast product-buying__transport-icon"></span>
                    <p className="product-buying__transport__text">
                      Przesyłka ekspresowa
                      <span className="product-buying__transport-important">
                        {" "}
                        35,00 zł dostępna{" "}
                      </span>
                    </p>
                  </div>
                  <div className="product-buying__transport-product">
                    <span className="fas fa-truck product-buying__transport-icon"></span>
                    <p className="product-buying__transport__text">
                      Przesyłka standardowa
                      <span className="product-buying__transport-important">
                        {" "}
                        gratis w ciągu 3-6 dni roboczych{" "}
                      </span>
                    </p>
                  </div>
                  <div className="product-buying__transport-product">
                    <span className="fas fa-truck product-buying__transport-icon"></span>
                    <p className="product-buying__transport__text">
                      Przesyłka standardowa
                      <span className="product-buying__transport-important">
                        {" "}
                        gratis w ciągu 3-6 dni roboczych{" "}
                      </span>
                    </p>
                  </div>
                  <div className="product-buying__transport-product">
                    <span className="fas fa-truck product-buying__transport-icon"></span>
                    <p className="product-buying__transport__text">
                      Przesyłka standardowa
                      <span className="product-buying__transport-important">
                        {" "}
                        gratis w ciągu 3-6 dni roboczych{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <ul className="about__list">
          <li className="about__item" onClick={() => window.scrollTo(0, 0)}>
            <span className="fas fa-angle-double-up about__item-icon"></span>
          </li>
          <li
            className="about__item"
            name="first"
            onClick={() => handleChangeContent(0)}
          >
            Szczegóły
          </li>
          <li
            className="about__item"
            name="second"
            onClick={() => handleChangeContent(1)}
          >
            Rozmiar i krój
          </li>
          <li
            className="about__item"
            name="third"
            onClick={() => handleChangeContent(2)}
          >
            Przesyłka
          </li>
        </ul>
        <div className="about__content">
          <h1 className="about__content-title">{title[text]}</h1>
          <p className="about__content-text">{content[text]}</p>
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default ProductDetails;
