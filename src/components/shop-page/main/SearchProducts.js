import React, { useState, useRef} from "react";
import "../../sass/main/SearchProducts.scss";
import {  NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../../redux/store";

const SearchProducts = props => {
  // STATE

  const [activeCategory, useActiveCategory] = useState("");
  const [activePrice, useAtivePrice] = useState(40);


  const exitElement = useRef(null);
  const exitElementContent = useRef(null);

  const dispatch = useDispatch();

  const _sortOptions = [
    {
      text: "najniższa cena",
      id: 0,
      className: "sorting__element"
    },
    {
      text: "najwyższa cena",
      id: 1,
      className: "sorting__element"
    }
  ];

  const _markOptions = [
    {
      id: 0,
      text: "puma",
      className: "mark__element"
    },
    {
      id: 1,
      text: "adidas",
      className: "mark__element"
    },
    {
      id: 2,
      text: "nike",
      className: "mark__element"
    },
    {
      id: 3,
      text: "Armani",
      className: "mark__element"
    },
    {
      id: 4,
      text: "new balance",
      className: "mark__element"
    },
    {
      id: 5,
      text: "Calvin klein",
      className: "mark__element"
    },
    {
      id: 6,
      text: "Lacoste",
      className: "mark__element"
    }
  ];

  const productsList = [
    {
      item_className:"main__categories-products",
      className:"main__categories-link",
      activeClassName:"main__categories-link--active",
      to:"/mainSide/home/kurtki",
      type:"SHOW_PRODUCT",
      product:"kurtka",
      name:"kurtki"
    },
    {
      item_className:"main__categories-products",
      className:"main__categories-link",
      activeClassName:"main__categories-link--active",
      to:"/mainSide/home/spodnie",
      type:"SHOW_PRODUCT",
      product:"spodnie",
      name:"spodnie"
    },
    {
      item_className:"main__categories-products",
      className:"main__categories-link",
      activeClassName:"main__categories-link--active",
      to:"/mainSide/home/buty",
      type:"SHOW_PRODUCT",
      product:"buty",
      name:"buty"
    },
    {
      item_className:"main__categories-products",
      className:"main__categories-link",
      activeClassName:"main__categories-link--active",
      to:"/mainSide/home/T-shirty",
      type:"SHOW_PRODUCT",
      product:"T-shirt",
      name:"T-shirty"
    },
    {
      item_className:"main__categories-products",
      className:"main__categories-link",
      activeClassName:"main__categories-link--active",
      to:"/mainSide/home/bluzy",
      type:"SHOW_PRODUCT",
      product:"bluza",
      name:"bluzy"
    
    }
  ]

  const showComponent = title => {
    const titleOfFilter = (
      <h1 className="filter__sort-options_title">{title}</h1>
    );

    // Universal Functions
    const handleSaveOptions = (type, option) => {
      option.className = `${type}__element ${type}__element--active`;
      exitElement.current.style.backgroundColor = "orange";
      exitElementContent.current.innerText = "zapisz";
    };

    const handleCloseOptions = (type, stateTable, useStateTable) => {
      const copyTable = [...stateTable];

      const activeElement = copyTable.filter(
        element => (element.className = `${type}__element`)
      );
      exitElement.current.style.backgroundColor = "black";
      exitElementContent.current.innerText = "zamknij";

      dispatch({ type: "RETURN_DEFAULT" });
      useStateTable(activeElement);
    };

    // SORTING
    const [activeSortElement, useActiveSortElement] = useState(_sortOptions);

    // DISPLAY PRODUCTS ON THE WEBSITE //REDUX
    activeSortElement.filter(element => {
      if (element.className === "sorting__element sorting__element--active") {
        if (element.text === "najwyższa cena") {
          dispatch({
            type: "SORT_PRODUCT"
          });
        } else if (element.text === "najniższa cena") {
          dispatch({
            type: "SORT_PRODUCT_SMALLEST"
          });
        } else return null;
      }
    });

    const handleSortClick = index => {
      const element = activeSortElement.filter(option => {
        if (option.id === index) {
          handleSaveOptions("sorting", option);

          return option;
        } else {
          option.className = "sorting__element";

          return option;
        }
      });

      useActiveSortElement(element);
    };

    const handleClearSorting = () => {
      handleCloseOptions("sorting", activeSortElement, useActiveSortElement);
    };

    const HandleShowSortOptions = () => {
      return activeSortElement.map((option, index) => (
        <span
          className={option.className}
          key={index}
          onClick={() => handleSortClick(index)}
        >
          {option.text}
        </span>
      ));
    };

    // SIZE

    // MARKS
    const showMark = product => ({
      type: "SHOW_MARK",
      product
    });
    
    const [activeMarkElement, useActiveMarkElement] = useState(_markOptions);

    const handleMarkClick = index => {
      const activeMark = activeMarkElement.filter(element => {
        if (element.id === index) {
          handleSaveOptions("mark", element);

          store.dispatch(showMark(element));
          element.className = "mark__element mark__element--active";
        } else {
          element.className = "mark__element";
        }
        return element;
      });

      useActiveMarkElement(activeMark);
    };

    const handleClearMark = () => {
      handleCloseOptions("mark", activeMarkElement, useActiveMarkElement);
    };

    switch(activeCategory){
     case "sortuj":
      return (
        <div className="sorting">
          {titleOfFilter}

          <span className="sorting__clear" onClick={handleClearSorting}>
            wyczyść
          </span>

          {HandleShowSortOptions()}
        </div>
      );
      break;
    // SIZE
      case "rozmiar":
      return (
        <>
          {titleOfFilter}
          <div className="size">
            {HandleShowSizeElements()}
            <span
              className="sorting__clear size__clear"
              onClick={handleClearSizing}
            >
              wyczyść
            </span>
          </div>
        </>
      );
      break;
    // MARK
      case  "marka":
      return (
        <>
          {titleOfFilter}
          <div className="mark">
            {activeMarkElement.map((mark, index) => (
              <span
                className={mark.className}
                key={index}
                onClick={() => handleMarkClick(index)}
              >
                {mark.text}
              </span>
            ))}
            <span
              className="sorting__clear size__clear"
              onClick={handleClearMark}
            >
              wyczyść
            </span>
          </div>
        </>
      );
      break;
    // PRICE
      case  "cena": return titleOfFilter;
      break;
  };
  }
  return (
    <>
      <h1 className="main__title">best seller</h1>
      <div className="main__categories">
        <ul className="main__categories-list">
          <li className="main__categories-products">
            {" "}
            <NavLink
              className="main__categories-link"
              activeClassName="main__categories-link--active"
              to="/mainSide/home/All"
              onClick={() => {
                dispatch({
                  type: "SHOW_ALL_PRODUCTS"
                });
              }}
            >
              All
            </NavLink>
          </li>
          {
            productsList.map((productItem,index)=>(
          <li className={productItem.item_className} key={index}>
            {" "}
            <NavLink
              className={productItem.className}
              to={productItem.to}
              activeClassName={productItem.activeClassName}
              onClick={() => {
                dispatch({
                  type: productItem.type,
                  product: productItem.product,
                  sex: ""
                });
              }}
            >
              {productItem.name}
            </NavLink>
          </li>
            ))
          }
          
   
        </ul>
      </div>
    </>
  );
};

export default SearchProducts;
