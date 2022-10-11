import React from "react";

const Blog = () => {
  return (
    <div>
      {/* each question starts  */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the purpose of React Router?
        </div>
        <div className="collapse-content">
          <p>
            React router is React Library that helps to set path and give the
            user smooth navigation.Also, this library has mede the life of
            developer easy to build SPA(Single Page Application). It helps to
            navigate the pages without reloading
          </p>
        </div>
      </div>
      {/* each question starts  */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is the context API???
        </div>
        <div className="collapse-content">
          <p>
            Basically, in react, data can be passed in unidirectional way like
            passing the data parent to children through props.When there is
            conplex Components level or more than 5 to 7 levels of data passing
            needed.Then the context api comes in handy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
