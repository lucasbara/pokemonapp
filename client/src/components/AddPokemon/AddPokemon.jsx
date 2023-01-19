import React, { useEffect, useState } from "react";
import styles from "./AddPokemon.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonTypes,
  addPokemon,
  clearState,
} from "../../actions/index.js";
import { validateForm } from "../../lib/utils";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import PokemonProfile from "../PokemonProfile/PokemonProfile";

const AddPokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getPokemonTypes());

    return () => {
      setStep(1);
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
  const [step, setStep] = useState(1);

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
    e.preventDefault();

    dispatch(addPokemon(input));
    toast.success("Your Pokemon was created sucessfully 🎉", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      history.push("/home");
      dispatch(clearState());
    }, 5000);
  };

  if (step === 1)
    return (
      <div className={styles.container}>
        <h1>Create a new Pokemon</h1>
        <form className={styles["add-pokemon-form"]}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={input.name}
            className={errors.name && styles.danger}
          />
          <p className={styles.errors}>{errors.name}</p>
          <input
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleInputChange}
            value={input.image}
          />
          <p className={styles.errors}>{errors.image}</p>
          <div className={styles.select}>
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
          </div>
          <p className={styles.errors}>{errors.type1}</p>
          <input
            type="number"
            placeholder="Attack"
            name="attack"
            onChange={handleInputChange}
            value={input.attack}
            className={errors.attack && styles.danger}
          />
          <p className={styles.errors}>{errors.attack}</p>
          <input
            type="number"
            placeholder="Defense"
            name="defense"
            onChange={handleInputChange}
            value={input.defense}
            className={errors.defense && styles.danger}
          />
          <p className={styles.errors}>{errors.defense}</p>
          <input
            type="number"
            placeholder="Health"
            name="hp"
            onChange={handleInputChange}
            value={input.hp}
            className={errors.hp && styles.danger}
          />
          <p className={styles.errors}>{errors.hp}</p>
          <input
            type="number"
            placeholder="Height"
            name="height"
            onChange={handleInputChange}
            value={input.height}
            className={errors.height && styles.danger}
          />
          <p className={styles.errors}>{errors.height}</p>
          <input
            type="number"
            placeholder="Speed"
            name="speed"
            onChange={handleInputChange}
            value={input.speed}
            className={errors.speed && styles.danger}
          />
          <p className={styles.errors}>{errors.speed}</p>
          <input
            type="number"
            placeholder="Weight"
            name="weight"
            onChange={handleInputChange}
            value={input.weight}
            className={errors.weight && styles.danger}
          />
          <p className={styles.errors}>{errors.weight}</p>
        </form>
        <div className={styles.button}>
          <Button
            onClick={() => setStep(2)}
            disabled={Object.keys(errors).length !== 0}
            style={{
              backgroundColor:
                Object.keys(errors).length !== 0 ? "#e76f51" : "#000000",
            }}
          >
            Continue
          </Button>{" "}
        </div>
      </div>
    );
  else
    return (
      <>
        <div className={styles.create}>
          <PokemonProfile pokemon={input} allTypes={types}>
            <div className={styles.button}>
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "#2a9d8f" }}
              >
                Create
              </Button>
            </div>
          </PokemonProfile>
        </div>
      </>
    );
};

export default AddPokemon;
