export const classNames = (...classes) => classes.join(" ");

export const typeColors = {
  normal: "rgba(168, 167, 122, 0.3)",
  fighting: "rgba(194, 46, 40, 0.3)",
  flying: "rgba(169, 143, 243, 0.3)",
  poison: "rgba(163, 62, 161, 0.3)",
  ground: "rgba(226, 191, 101, 0.3)",
  rock: "rgba(182, 161, 54, 0.3)",
  ghost: "rgba(115, 87, 151, 0.3)",
  bug: "rgba(166, 185, 26, 0.3)",
  steel: "rgba(183, 183, 206, 0.3)",
  fire: "rgba(238, 129, 48, 0.3)",
  water: "rgba(99, 144, 240, 0.3)",
  grass: "rgba(122, 199, 76, 0.3)",
  electric: "rgba(247, 208, 44, 0.3)",
  psychic: "rgba(249, 85, 135, 0.3)",
  ice: "rgba(150, 217, 214, 0.3)",
  dragon: "rgba(111, 53, 252, 0.3)",
  dark: "rgba(112, 87, 70, 0.3)",
  fairy: "rgba(214, 133, 173, 0.3)",
  unknown: "rgba(198, 198, 167, 0.3)",
  shadow: "rgba(198, 198, 198, 0.3)",
};

export const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const validateForm = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be plain text";
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
};
