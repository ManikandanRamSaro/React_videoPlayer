import axios from 'axios';
const KEY =  'AIzaSyAvG2zUcD4AkNeP5WCAbYuGEqEL8qNrTLk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY 
    }
})