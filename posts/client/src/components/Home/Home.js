
import React,{useState, useEffect} from 'react'
import {Grow, Container, Grid} from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts()); //tengo que crear un action para despachar aqui
    }, [dispatch, currentId]);
    
    return (
        <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>    
    )
}

export default Home