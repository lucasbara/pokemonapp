import React, { useEffect, useState } from "react";
import style from "./AddPokemon.module.css";
import Img from "../../img/addpokemon.png";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Modal from "../Modal/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonTypes,
  addPokemon,
  clearState,
} from "../../actions/index.js";

function AddPokemon() {
  const dispatch = useDispatch();
  const isCreated = useSelector((state) => state.addedPokemon);
  const types = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getPokemonTypes());
    console.log("Pre renderizado", errors);
  }, []);

  // Controlled form
  const [input, setInput] = useState({
    name: "",
    image: "",
    type1: "",
    type2: "",
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });

  const [errors, setErrors] = useState({ name: "" });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    if (!input.name) return alert("You must complete the form");
    e.preventDefault();
    dispatch(addPokemon(input));
    setInput({
      name: "",
      image: "",
      type1: "",
      type2: "",
      height: "",
      weight: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
    });
  };

  // Modal on Submit button

  const finishedForm = () => {
    setTimeout(() => dispatch(clearState()), 2000);
  };

  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <div className={style.formContainer}>
          <div className={style.formColumn}>
            {input.image ? (
              <img
                src={input.image}
                className={style.inputImage}
                alt={input.name}
              ></img>
            ) : (
              <img
                src={Img}
                className={style.defaultImage}
                alt="New Pokemon"
              ></img>
            )}
            {input.name && <p>{input.name}</p>}
          </div>
          <form className={style.form} onSubmit={handleSubmit}>
            <h1 className={style.formTitle}>Create a new pokemon</h1>
            <div className={style.bar}></div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleInputChange}
                value={input.name}
                className={errors.name && style.danger}
              ></input>
              {errors.name && <p className={style.errors}>{errors.name}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Image"
                name="image"
                onChange={handleInputChange}
                value={input.image}
              ></input>
              {errors.image && <p className={style.errors}>{errors.image}</p>}
            </div>
            <div className={style.input}>
              <select
                name="type1"
                onChange={handleInputChange}
                value={input.type1}
              >
                <option value="Type 1">Type 1</option>
                {types &&
                  types
                    .sort((a, b) => {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;
                    })
                    .map((type) => {
                      return (
                        <option value={type.id} key={type.id}>
                          {type.name}
                        </option>
                      );
                    })}
              </select>
              <select
                name="type2"
                onChange={handleInputChange}
                value={input.type2}
              >
                <option value="Type 2">Type 2</option>
                {types &&
                  types
                    .sort((a, b) => {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;
                    })
                    .map((type) => {
                      return (
                        <option value={type.id} key={type.id}>
                          {type.name}
                        </option>
                      );
                    })}
              </select>
              {errors.type1 && <p className={style.errors}>{errors.type1}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Height"
                name="height"
                onChange={handleInputChange}
                value={input.height}
                className={errors.height && style.danger}
              ></input>
              {errors.height && <p className={style.errors}>{errors.height}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Weight"
                name="weight"
                onChange={handleInputChange}
                value={input.weight}
                className={errors.weight && style.danger}
              ></input>
              {errors.weight && <p className={style.errors}>{errors.weight}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Health"
                name="hp"
                onChange={handleInputChange}
                value={input.hp}
                className={errors.hp && style.danger}
              ></input>
              {errors.hp && <p className={style.errors}>{errors.hp}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Attack"
                name="attack"
                onChange={handleInputChange}
                value={input.attack}
                className={errors.attack && style.danger}
              ></input>
              {errors.attack && <p className={style.errors}>{errors.attack}</p>}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Defense"
                name="defense"
                onChange={handleInputChange}
                value={input.defense}
                className={errors.defense && style.danger}
              ></input>
              {errors.defense && (
                <p className={style.errors}>{errors.defense}</p>
              )}
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Speed"
                name="speed"
                onChange={handleInputChange}
                value={input.speed}
                className={errors.speed && style.danger}
              ></input>
              {errors.speed && <p className={style.errors}>{errors.speed}</p>}
            </div>
            {Object.keys(errors).length !== 0 ? (
              <button
                disabled="true"
                className={style.btnError}
                onClick={finishedForm}
              >
                <p>Complete the form</p>
              </button>
            ) : (
              <button className={style.btn} onClick={finishedForm}>
                Create
              </button>
            )}
            {isCreated && <Modal />}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function validateForm(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be a text string with lowercase letters";
  }
  if (!input.image) {
    errors.image = "Image is required";
  } else if (
    !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
      input.image
    )
  ) {
    errors.image = "An URL of an image is required";
  }
  if (!input.type1 || input.type1 === "type1") {
    errors.type1 = "Type can not be empty";
  }
  if (!input.height) {
    errors.height = "Height is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.height)) {
    errors.height = "Height must be between 1 and 1000";
  }
  if (!input.weight) {
    errors.weight = "Weight is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.weight)) {
    errors.weight = "Weight must be between 1 and 1000";
  }

  if (!input.hp) {
    errors.hp = "Hp is required";
  } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
    errors.hp = "Hp must be between 1 and 255";
  }
  if (!input.attack) {
    errors.attack = "Attack is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)
  ) {
    errors.attack = "Attack must be between 1 and 255";
  }
  if (!input.defense) {
    errors.defense = "Defense is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)
  ) {
    errors.defense = "Defense must be between 1 and 255";
  }
  if (!input.speed) {
    errors.speed = "Speed is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)
  ) {
    errors.speed = "Speed must be between 1 and 255";
  }

  return errors;
}

export default AddPokemon;
