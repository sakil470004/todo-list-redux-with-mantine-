import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETETODO,
  EDITTODO,
  TOGGLED
} from "./todo.types";

export const addtodo = (todo) => {
  return {
    type: ADDTODO,
    payload: todo,
  };
};
export const toggledTodo = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const deletetodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};
export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const colorselected = (id, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      id,
      color,
    },
  };
};
export const updateTodo = (id, text) => {
  return {
    type: EDITTODO,
    payload: {
      id,
      text,
    },
  };
};
