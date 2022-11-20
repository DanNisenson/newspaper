import "./Categories.css";

const Categories = (props) => {

  return (
    <>
      <div className="sections">
        <div className="more-sections">General</div>
        <div className="category" onClick={() => props.updateCategory('technology')}>
          Technology
        </div>
        <div className="category" onClick={() => props.updateCategory('science')}>
          Science
        </div>
        <div className="category" onClick={() => props.updateCategory('health')}>
          Health
        </div>
        <div className="category" onClick={() => props.updateCategory('entertainment')}>
          Entertainment
        </div>
        <div className="more-sections">Technology</div>
        <div className="more-sections">Business</div>
      </div>
      <div className="double-line"></div>
    </>
  );
};

export default Categories;
