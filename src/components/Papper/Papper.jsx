import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MenProducts from '../MenProducts/MenProducts';
import Navbar from '../Navbar/Navbar';
import MenDatas from '../../productdata/menproductdata/menproductdata';
import { useState } from 'react';

const useStyles = makeStyles({
  paper: {
    dsiplay: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',

    height: '85vh',
    width: '95vw',
    backgroundColor: '#fefbec',
    borderRadius: 15,
    // overflow: 'hidden',
  },
});

const Papper = () => {
  const classes = useStyles();
  const [productdata, setproductData] = useState({});

  const handleClickImage = (id) => {
    console.log(id);
    const foundproduct = MenDatas.find((data) => data.id === id);
    setproductData(foundproduct);
  };

  return (
    <div>
      <Paper elevation={10} className={classes.paper}>
        <Navbar />

        <MenProducts
          productdata={productdata}
          handleClickImage={handleClickImage}
        />
      </Paper>
    </div>
  );
};
export default Papper;
