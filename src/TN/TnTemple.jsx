import { Component } from "react";
import temple1 from "../assets/Meenakshi-Amman-Temple-Madurai.jpg";
import temple2 from "../assets/Adi-Kumbeswarar-Temple-Kumbakonam.jpg";
import temple3 from "../assets/Brihadeeswarar-Temple-Thanjavur.jpg";
import temple4 from "../assets/Sri-Ranganathaswamy-Temple-Srirangam.jpg";
import temple5 from "../assets/Sri-Rajagopala-Swamy-Temple-Mannargudi.jpg";
import temple6 from "../assets/Jambukeswarar-Temple-Thiruvanaikaval.jpg";
import temple7 from "../assets/Kanchi-Kailasanathar-Temple-Kanchipuram.jpg";
import temple8 from "../assets/Ekambareswarar-Temple-Kanchipuram.jpg";
import temple9 from "../assets/Rameshwaram-Jyotirlinga-Temple.jpg";
import temple10 from "../assets/Mayuranathaswami-Temple-Mayiladuthurai.jpg";
import temple11 from "../assets/Kapaleeshwarar-Temple-Chennai.jpg";
import temple12 from "../assets/Sri-Ranganathaswamy-Temple-Srirangam.jpg";
import "./TnTemple.css";
import { Link } from "react-router-dom";
class TnTemple extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple1} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Meenakshi Amman Temple Madurai – An Ancient Divine
                    Destination
                  </h4>
                  <p className="card-text">Location: Madurai</p>
                  <p class="card-text">
                    Dedicated to Goddess Parvati in the form of Meenakshi and
                    her consort, Lord Shiva in the form of Lord Sundareswarar,
                    the Meenakshi Amman Temple is one of the most ancient and
                    famous temples not only in Tamil Nadu but, in entire India.
                  </p>
                  <Link to="/explore-temples/t1">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple2} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Adi Kumbeswarar Temple Kumbakonam – Royal Cholas Rich Legacy
                  </h4>{" "}
                  <p className="card-text">Location: Kumbakonam</p>
                  <p class="card-text">
                    The grandeur of Chola dynasty is still intact in the form of
                    divine Adi Kumbeswarar temple. It’s an exquisite Dravidian
                    style masterpiece which was renovated by Govinda Dikshitar,
                    chief of Achutha Nayakar of Thanjavur in 16th century AD.
                  </p>
                  <Link to="/explore-temples/t2">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple3} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Brihadeeswarar Temple Thanjavur – One of ‘Great living Chola
                    Temples’
                  </h4>{" "}
                  <p className="card-text">Location: Thanjavur</p>
                  <p class="card-text">
                    The ‘Brihadeeswarar Temple’ is a delightful abode of Lord
                    Shiva and is located in the Thanjavur district of Tamil
                    Nadu. It is one of the largest temples in India. This
                    brilliant creation of the Chola dynasty in the 11th century
                    of the Chola rulers.
                  </p>
                  <Link to="/explore-temples/t3">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple4} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Sri Ranganathaswamy Temple Srirangam – Spiritual Peace and
                    Wonderful Architecture
                  </h4>{" "}
                  <p className="card-text">Location: Srirangam</p>
                  <p class="card-text">
                    Dedicated to Lord Vishnu, the ‘Ranganathaswamy Temple’
                    located on the Srirangam Island of the Tiruchirappalli city
                    in Tamilnadu, is another masterpiece of Dravidian
                    architecture. Spread across an area of over 150 acres.
                  </p>
                  <Link to="/explore-temples/t4">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple5} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Sri Rajagopala Swamy Temple, Mannargudi – Lord Krishna’s
                    Grand Abode
                  </h4>{" "}
                  <p className="card-text">Location: Mannargudi</p>
                  <p class="card-text">
                    Located in the town of Mannargudi the divine temple of
                    Rajagopala Swamy is one of the most popular shrines of Lord
                    Krishna. The temple is also known as Guruvayoor by Hindus.
                    It is one of the most popular vaishnavite temples in India.
                  </p>
                  <Link to="/explore-temples/t5">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple6} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Jambukeswarar Temple, Thiruvanaikaval- Divinity of Jambu
                    Tree
                  </h4>{" "}
                  <p className="card-text">Location: Thiruvanaikaval</p>
                  <p class="card-text">
                    Located on the Srirangam Island of Tamilnadu is the
                    ‘Jambukeshwara Temple’ dedicated to Lord Shiva. Built during
                    the Chola period this temple is a brilliant example of
                    Dravidian style of architecture. It has 7 tiered Gopuram
                    adorned with delicate carvings which depicts the artistic
                    grandeur of Chola Kingdom.
                  </p>
                  <Link to="/explore-temples/t6">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple7} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Kanchi Kailasanathar Temple, Kanchipuram
                  </h4>{" "}
                  <p className="card-text">Location: Kanchipuram</p>
                  <p class="card-text">
                    Kanchipuram, the ancient town of Tamil Nadu has been luring
                    divinely inspired travellers to its divine shores where
                    temples tell the mystic tales of Gods and behind their
                    creation the grandeur and artistic brilliance of Pallava
                    Dynasty. You will see some of the best temples from the
                    period of Pallavas.
                  </p>
                  <Link to="/explore-temples/t7">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple8} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Ekambareswarar Temple, Kanchipuram- Ethereal Vibes
                  </h4>{" "}
                  <p className="card-text">Location: Kanchipuram</p>
                  <p class="card-text">
                    The ‘Ekambareswarar Temple’ attracts thousands of pilgrims
                    and other tourists from different parts of India and abroad.
                    Counted amongst five ‘Panch Bootha Sthalas’ (five elements
                    of the universe), the temple is dedicated to the element,
                    Earth and holds a great religious significance for devotees
                    of Lord Shiva.
                  </p>
                  <Link to="/explore-temples/t8">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple9} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Ramanathaswamy Temple Rameshwaram- God’s Own Temple
                  </h4>{" "}
                  <p className="card-text">Location: Rameshwaram</p>
                  <p class="card-text">
                    One of the four primary pilgrimage destinations (‘Char
                    Dhams’) for all Hindus across the world, the ‘Ramanathaswamy
                    Temple’ is swarmed by hordes of pilgrims every day. Besides
                    being one of the holy ‘Chardham’, the temple is also counted
                    amongst the 12 sacred Jyotirlingas of Lord Shiva.
                  </p>
                  <Link to="/explore-temples/t9">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple10} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Mayuranathaswami Temple Mayiladuthurai
                  </h4>{" "}
                  <p className="card-text">Location: Mayiladuthurai</p>
                  <p class="card-text">
                    Located in the Nagapattinam District of Tamil Nadu,
                    Mayuranathaswami temple is one of the very popular holy
                    shrines of Lord Shiva. According to a legend, once Lord
                    Shiva cursed Goddess Parvati and as a result Goddess Parvati
                    was born as a Peahen.
                  </p>
                  <Link to="/explore-temples/t10">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple11} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Kapaleeshwarar Temple, Chennai – Legend of Peacock Continues
                  </h4>{" "}
                  <p className="card-text">Location: Chennai </p>
                  <p class="card-text">
                    Located in Mylapore district of Chennai, the ‘Kapaleeshwarar
                    Temple’ was built under the reign of the Pallava Kings
                    during 7th century CE. However, the temple structure that
                    stands today dates back to 16th century CE owing to the fact
                    that the original structure was devastated by the Portuguese
                    and it was in the 16th century that
                  </p>
                  <Link to="/explore-temples/t11">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card bg-dark text-light">
                <img class="card-img-top" src={temple12} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">
                    Sri Ranganathaswamy Temple Srirangam – Spiritual Peace and
                    Wonderful Architecture
                  </h4>{" "}
                  <p className="card-text">Location: Srirangam</p>
                  <p class="card-text">
                    Dedicated to Lord Vishnu, the ‘Ranganathaswamy Temple’
                    located on the Srirangam Island of the Tiruchirappalli city
                    in Tamilnadu, is another masterpiece of Dravidian
                    architecture. Spread across an area of over 150 acres.
                  </p>
                  <Link to="/explore-temples/t12">
                    <button type="button" class="btn btn-primary">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TnTemple;
