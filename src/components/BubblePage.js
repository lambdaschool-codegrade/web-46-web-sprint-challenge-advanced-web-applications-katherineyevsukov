import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axios from "axios";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
    .post('/colors', editColor)
    .then(res => {
      setColors(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  };

  const deleteColor = (colorToDelete) => {
  };

  useEffect(() => {
    fetchColorService().then(data => setColors(data)).catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
