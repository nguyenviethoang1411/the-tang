import React, { Component } from "react";
class RecipeIngredientOne extends Component {
  render() {
    return (
      <section
        className="sec-space parallax position-relative"
        style={{
          backgroundImage:
            "url(" + "assets/images/image-recipe-parallax.jpg" + ")",
        }}
      >
        <div className="container">
          <div className="recipy-content">
            <h2 className="text-center">Spicy Meatballs Recipy</h2>
            <div className="chef-special">
              <ul className="recipe-cokng-info d-flex justify-content-center p-0 list-unstyled">
                <li className="fs-16 text-gray">
                  <span>
                    <svg viewBox="0 0 510 510" height="25" fill="#4fd675">
                      <g>
                        <path d="m165 255h30v90h-30z" />
                        <path d="m240 255h30v90h-30z" />
                        <path d="m315 255h30v90h-30z" />
                        <path d="m375 30c-15.749 0-31.068 3.472-45.062 10.137-16.478-24.81-44.398-40.137-74.938-40.137s-58.46 15.327-74.938 40.137c-13.994-6.665-29.313-10.137-45.062-10.137-57.897 0-105 47.103-105 105 0 40.785 23.715 77.667 60.001 94.888l-.001 280.112h330v-280.112c36.285-17.223 60-54.104 60-94.888 0-57.897-47.103-105-105-105zm15 450h-270v-60h270zm10.001-274.271-10.001 3.536v180.735h-270l.001-180.735-10.001-3.536c-29.906-10.571-50-38.995-50-70.729 0-41.355 33.645-75 75-75 15.241 0 29.911 4.546 42.423 13.147l15.145 10.41 7.165-16.923c9.422-22.254 31.117-36.634 55.267-36.634s45.845 14.38 55.268 36.635l7.165 16.923 15.145-10.41c12.511-8.602 27.181-13.148 42.422-13.148 41.355 0 75 33.645 75 75 0 31.733-20.093 60.157-49.999 70.729z" />
                      </g>
                    </svg>
                  </span>
                  Preparation time: <strong>30 mins</strong>
                </li>
                <li className="fs-16 text-gray">
                  <span>
                    <svg viewBox="0 0 512 512" height="25" fill="#4fd675">
                      <g>
                        <g>
                          <path d="M498.682,435.326L297.917,234.56L63.357,0H45.026l-3.743,9.511c-9.879,25.104-14.1,50.78-12.205,74.249 c2.16,26.752,12.323,49.913,29.392,66.982L241.58,333.852l24.152-24.152l169.285,189.293c16.84,16.84,45.825,17.84,63.665,0 C516.236,481.439,516.236,452.879,498.682,435.326z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M156.728,291.442L13.317,434.853c-17.552,17.552-17.552,46.113,0,63.665c16.674,16.674,45.519,18.146,63.665,0 l143.412-143.412L156.728,291.442z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M490.253,85.249l-81.351,81.35l-21.223-21.222l81.351-81.351l-21.222-21.222l-81.35,81.35l-21.222-21.222l81.351-81.35 L405.366,0.361L299.256,106.471c-12.981,12.981-20.732,30.217-21.828,48.535c-0.277,4.641-1.329,9.206-3.074,13.548l68.929,68.929 c4.342-1.747,8.908-2.798,13.548-3.075c18.318-1.093,35.554-8.846,48.535-21.827l106.11-106.109L490.253,85.249z" />
                        </g>
                      </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                      <g> </g>
                    </svg>
                  </span>
                  Cooking time: <strong>10 to 30 mins</strong>
                </li>
                <li className="fs-16 text-gray">
                  <span>
                    <svg
                      viewBox="0 0 443.294 443.294"
                      height="25"
                      fill="#4fd675"
                    >
                      <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
                      <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
                    </svg>
                  </span>
                  Serves: <strong>4 Persons</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="recip-inner">
          <div className="container bg-white">
            <div className="row">
              <div className="col-md-12">
                <div className="special-ingradient d-flex justify-content-around">
                  <div className="Ingredient-list">
                    <h3>Ingredients</h3>
                    <ul className="w-100">
                      <li>Dairy Products</li>
                      <li>Fruits</li>
                      <li>Meat</li>
                      <li>Sugar and Sugar Products</li>
                      <li>Nuts and Oilseeds</li>
                      <li>Seafood</li>
                      <li>Spices and Herbs</li>
                      <li>Vegetables</li>
                      <li>Cereals and Pulses</li>
                    </ul>
                  </div>
                  <div className="pl-130">
                    <h3>Directions</h3>
                    <ul className="list-unstyled gradient-list ">
                      <li className="d-flex">
                        <h3>1</h3> For the marinade, combine sake and mirin in a
                        medium sauce- pan over high heat. Boil for 30 seconds.
                        Turn heat to low and add miso paste and soy sauce,
                        stirring until the paste is completely dissolved.
                      </li>
                      <li className="d-flex">
                        <h3>2</h3> Pat the cod fillets dry with paper towels.
                        Place fish in a large resealable plastic bag and pour in
                        the marinade. Refrigerate 12-24 hours, turning fish
                        occasionally.
                      </li>
                      <li className="d-flex">
                        <h3>3</h3>Preheat oven to 450??F. Line a baking sheet
                        with aluminum foil and coat with non-stick cooking
                        spray.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default RecipeIngredientOne;
