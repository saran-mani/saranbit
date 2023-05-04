import { Component } from "react";
import "./Home.css";
import temple1 from "../assets/bannari-amman-temple.webp";
import temple2 from "../assets/Meenakshi-Amman-Temple-Madurai.jpg";
import temple3 from "../assets/Adi-Kumbeswarar-Temple-Kumbakonam.jpg"
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container header">
            <div className="container text-center"><Link to="/explore-temples"> <button type="button" class="btn btn-primary text-center">Explore Temple's</button></Link></div>

          <h1 className=" temple-head text-center mt-5 text-light">
            Temple visit is a spiritual experience that makes a person better.
          </h1>
        </div>
        <div className="container">
          <div className="row mt-5">
            <h1 className="text-light">Bannari Amman temple</h1>
            <div className="col-sm">
              <img
                className="templeImg"
                src={temple1}
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm text-light fs-4 temple-text mt-3">
              Bannari Amman temple is one of the Amman temples in Tamil Nadu,
              India. It is located in Bannari on NH 209, near Sathyamangalam,
              Erode district. The main deity at the temple is goddess Mariamman
              (the goddess of rain), an avatar of goddess Parvathi. The goddess
              is considered powerful in the Tamil and Kannada folklore, and
              roughly every village in the Kongu region of Tamil Nadu has a
              Mariamman temple{" "}
              <button type="button" class="btn btn-primary">
                Explore
              </button>
            </div>
          </div>
          <div className="row mt-5">
          <h1 className="text-light">Meenakshi Amman Temple Madurai </h1>
            {" "}<div className="col-sm">
                
              <img
                className="templeImg"
                src={temple2}
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm text-light fs-4 temple-text mt-3">
              Dedicated to Goddess Parvati in the form of Meenakshi and her
              consort, Lord Shiva in the form of Lord Sundareswarar, the
              Meenakshi Amman Temple is one of the most ancient and famous
              temples not only in Tamil Nadu but, in entire India.{" "}
              <button type="button" class="btn btn-primary">
                Explore
              </button>
            </div>
            
          </div>
          <div className="row mt-5">
          <h1 className="text-light">Adi Kumbeswarar Temple Kumbakonam</h1>
            <div className="col-sm">
              <img
                className="templeImg"
                src={temple3}
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className="col-sm text-light fs-4 temple-text mt-3">
              The grandeur of Chola dynasty is still intact in the form of
              divine Adi Kumbeswarar temple. It’s an exquisite Dravidian style
              masterpiece which was renovated by Govinda Dikshitar, chief of
              Achutha Nayakar of Thanjavur in 16th century AD. The temple is
              dedicated to Lord Shiva.
              <button type="button" class="btn btn-primary">
                Explore
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
