import React, { useState, useEffect } from 'react'
import useStyles from './style'
import {Paper, Typography, TextField, Button} from '@material-ui/core' 
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux'


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title:'', message:'',tags:'', selectedFile:''});
    //console.log(currentId); //me llega undefined
    
    const posts = useSelector((state)=> state.posts.find(post => post._id === currentId) )
    const classes = useStyles();
    const dispatch = useDispatch();
    //console.log('POSTS', posts);
    const user = JSON.parse(localStorage.getItem('profile'))
    
    useEffect(()=>{
        if(posts) setPostData(posts)
    },[posts])

    const handleSubmit =(e)=>{
     
        e.preventDefault();
        if(currentId){
           
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name }))
        }else{
            dispatch(createPost({...postData, name: user?.result?.name }));
        }
        clear();
        
    }
    const clear  = () => {
        setCurrentId(null)
        setPostData({creator:'', title:'', message:'',tags:'', selectedFile:''})
    }
    if(!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>
                    Please sign in to create posts
                </Typography>

            </Paper>    
        )
    }
    return (
       <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
            <Typography variant='h6'> {currentId ? 'Editing': 'Creating'} a Post</Typography>
            <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
            <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
            <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
            <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
            <div className={classes.fileInput}>
                <FileBase type='file' multiple={false} onDone={( {base64} )=> setPostData({ ...postData, selectedFile: base64})} />
            </div>

            <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>          
            <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>          
        </form>
       </Paper>
    )
}

export default Form

