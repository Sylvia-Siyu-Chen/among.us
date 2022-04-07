import 'express'
import App from './App'

App.use(express.static(path.join(__dirname,'build')));

App.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
});