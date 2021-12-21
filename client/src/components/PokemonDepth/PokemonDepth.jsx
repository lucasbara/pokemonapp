import React, { useEffect } from "react";
import style from "./PokemonDepth.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { AiFillThunderbolt, AiFillFire } from "react-icons/ai";
import { BsShieldFillPlus } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { FaHeart, FaRulerVertical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, clearPokemonById } from "../../actions";
import Loading from "../../img/loading.gif";
import { Link } from "react-router-dom";

function PokemonDepth({ name, types, image, hp, attack, defense, speed }) {
  const dispatch = useDispatch();
  const pokemonByID = useSelector((state) => state.pokemonById);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonById(id));
    dispatch(clearPokemonById());
    console.log(pokemonByID);
  }, []);
  if (pokemonByID.length === 0) {
    return (
      <div>
        <Header />
        <div className={style.loadingContainer}>
          <img src={Loading} alt="Loading" />
          <h1 className={style.loadingText}>Loading... please wait</h1>
        </div>
        <Footer style={{ backgroundColor: "#f1f1f1" }} />
      </div>
    );
  } else {
    return (
      <div className={style.bigContainer}>
        <Header />
        <div className={style.goBack}>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <a>Go Back</a>
          </Link>
        </div>
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.upper}>
              <div>
                <img
                  src={pokemonByID.image}
                  alt={pokemonByID.name}
                  className={style.pokemonImg}
                />
              </div>
              <div className={style.stats}>
                <div className={style.statsCard}>
                  <FaHeart className={style.icon} />
                  <h4>Health</h4>
                  <p>{pokemonByID.hp}</p>
                </div>
                <div className={style.statsCard}>
                  <AiFillThunderbolt className={style.icon} />
                  <h4>Speed</h4>
                  <p>{pokemonByID.speed}</p>
                </div>
                <div className={style.statsCard}>
                  <AiFillFire className={style.icon} />
                  <h4>Attack</h4>
                  <p>{pokemonByID.attack}</p>
                </div>
                <div className={style.statsCard}>
                  <BsShieldFillPlus className={style.icon} />
                  <h4>Defense</h4>
                  <p>{pokemonByID.defense}</p>
                </div>
                <div className={style.statsCard}>
                  <FaRulerVertical className={style.icon} />
                  <h4>Height</h4>
                  <p>{pokemonByID.height}</p>
                </div>
                <div className={style.statsCard}>
                  <GiWeight className={style.icon} />
                  <h4>Weight</h4>
                  <p>{pokemonByID.weight}</p>
                </div>
              </div>
            </div>
            <div className={style.cardGradient}>
              <p className={style.pokemonName}>{pokemonByID.name}</p>
              <div className={style.types}>
                {pokemonByID.types &&
                  pokemonByID.types.map((type) => <p>{type}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className={style.empty}></div>
        <Footer />
      </div>
    );
  }
}

export default PokemonDepth;
