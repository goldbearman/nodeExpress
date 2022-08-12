const experess = require('express');
const path = require('path');

const app = experess();

app.set('view engine','ejs');

const PORT = 3000;
const createPath = (page) => path.resolve(__dirname,'ejs-views', `${page}.ejs`); //разные платформы-разная /,поэтому используем

app.listen(PORT, 'localhost', error => {            //имя хоста обязательно! localhost
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//Отправляем html
app.get('/',(req,res)=>{
  res.render(createPath('index'));   //index.ejs
});

app.get('/contacts',(req,res)=>{
  res.render(createPath('contacts'));   //contacts.ejs
});

app.get('/posts/:id',(req,res)=>{
  res.render(createPath('post'));   //contacts.ejs
});

app.get('/posts',(req,res)=>{
  res.render(createPath('posts'));   //contacts.ejs
});

app.get('/add-post',(req,res)=>{
  res.render(createPath('add-posts'));   //contacts.ejs
});

app.get('/about-us',(req,res)=>{
  res.redirect('/contacts');   //contacts.ejs
});

app.use((req,res)=>{ //должен быт в конце!!!
  res
    .status(404)                           //передаем статускод
    .render(createPath('error'))         //error.ejs
})

