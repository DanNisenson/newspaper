import "../assets/css/Categories.css";

const Categories = (props) => {
  return (
    <>
      <div className="sections-container-parent">
        <div className="sections-container">
          <div className="sections">
            <div className="sections-scroll-shadow"></div>
            <div
              className="category"
              onClick={() => props.setCategory("general")}
            >
              General
            </div>
            <div
              className="category"
              onClick={() => props.setCategory("technology")}
            >
              Technology
            </div>
            <div
              className="category"
              onClick={() => props.setCategory("science")}
            >
              Science
            </div>
            <div
              className="category"
              onClick={() => props.setCategory("health")}
            >
              Health
            </div>
            <div
              className="category"
              onClick={() => props.setCategory("entertainment")}
            >
              Entertainment
            </div>
            <div
              className="category"
              onClick={() => props.setCategory("business")}
            >
              Business
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
