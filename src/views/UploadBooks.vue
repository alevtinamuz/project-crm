<template>
  <div class="container">    
    <h1 id="title">BookCourt</h1>
    <form id="survey-form" method="GET">      
      <div class="labels">
        <label for="dropdown">Название книги</label></div>      
        <div class="input-tab">
        <select name="Name" >          
          <option disabled value selected>Выберете номер подходящего столбца</option>
          <option value="1">1</option>          
          <option value="2">2</option>
          <option value="3">3</option>          
          <option value="4">4</option>
          <option value="5">5</option>          
          <option value="6">6</option>
          <option value="7">7</option>        
        </select>
      </div>      
      <div class="labels">
        <label for="dropdown">Автор</label></div>      
        <div class="input-tab">
        <select name="Author" >          
          <option disabled value selected>Выберете номер подходящего столбца</option>
          <option value="1">1</option>
          <option value="2">2</option>          
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>          
          <option value="7">7</option>
        </select>      
      </div>
      <div class="labels">        
        <label for="dropdown">Год издания</label>
      </div>
      <div class="input-tab">        
        <select name="Year" >
          <option disabled value selected>Выберете номер подходящего столбца</option>          
          <option value="1">1</option>
          <option value="2">2</option>          
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>          
          <option value="7">7</option>
        </select>      
      </div>
      <div class="labels">
        <label for="dropdown">ISBN</label></div>      
        <div class="input-tab">
        <select name="ISBN" >          
          <option disabled value selected>Выберете номер подходящего столбца</option>
          <option value="1">1</option>          
          <option value="2">2</option>
          <option value="3">3</option>          
          <option value="4">4</option>
          <option value="5">5</option>          
          <option value="6">6</option>
          <option value="7">7</option>        
        </select>
      </div>
      <div class="labels">        
        <label for="dropdown">Обложка</label>
      </div>
      <div class="input-tab">        
        <select name="Img" >
          <option disabled value selected>Выберете номер подходящего столбца</option>          
          <option value="1">1</option>
          <option value="2">2</option>          
          <option value="3">3</option>
          <option value="4">4</option>          
          <option value="5">5</option>
          <option value="6">6</option>          
          <option value="7">7</option>
        </select>      
      </div>
      <div class="labels">        
        <label for="dropdown">Описание книги</label>
      </div>
      <div class="input-tab">        
        <select name="description" >
          <option disabled value selected>Выберете номер подходящего столбца</option>
          <option value="1">1</option>          
          <option value="2">2</option>
          <option value="3">3</option>          
          <option value="4">4</option>
          <option value="5">5</option>          
          <option value="6">6</option>
          <option value="7">7</option>        
        </select>
      </div>      
      <div class="labels">
        <label for="dropdown">Жанр</label>
      </div>      
      <div class="input-tab">
        <select name="Genre" >          
          <option disabled value selected>Выберете номер подходящего столбца</option>
          <option value="1">1</option>          
          <option value="2">2</option>
          <option value="3">3</option>          
          <option value="4">4</option>
          <option value="5">5</option>          
          <option value="6">6</option>
          <option value="7">7</option>        
        </select>
      </div>
      <div class="input_container">
        <input type="file" id="fileUpload">
      </div>
      <div class="btn">
        <router-link to="/catalog"><button id="submit" type="submit">Загрузить файл</button></router-link>     
      </div>
    </form>
  </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abel');

body, html {  
    color: #3B3034;
    font-family: 'Abel', sans-serif;  
    margin: 0;
    padding: 0;  
    background-color: transparent;
}
body {  
    font-size: 1.2em;
    background: linear-gradient(rgba(254, 214, 152, 0.47), rgba(254, 214, 152, 0.47)), url(https://wallpapercave.com/wp/Fdh76FQ.jpg) center no-repeat fixed;  -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    background-size: cover;
}
.text-box {
    background-color: #B7647C;  
    border-radius: 20px;    
    margin: 2em auto;  
    padding: 20px;
    width: 90%;
}
h1 {
    margin-top: 30px;  
    padding: 0;
    font-size: 2.8em;  
    color: #3B3034;
    text-align: center;  
    letter-spacing: 2px;
    word-spacing: 5px;  
    line-height: 1em;
    font-weight: bold;
}
p {
  display: block;  
  margin: 0;
  padding: 0;  
  text-align: center;
  font-size: 1.2em;  
  line-height: 1.2em;
}
hr {
    width: 70%;  
    margin: 10px auto;
}
.container {  
    background-color:;
    border-radius: 20px;  
    margin: auto;
    width: 90%;  
    padding: 1em;
}
#survey-form {
    margin: 0 auto;  
    width: 80%;
    padding: 10px;
}
.labels {
    display: inline-block;  
    text-align: right;
    width: 40%;  
    vertical-align: top;
    margin-top: 20px;
}
.input-tab {  
    display: inline-block;
    text-align: left;  
    width: 50%;
    margin-left: 10px;
}
.input-field {
    display: inline-block;  
    width: 100%;
    padding: 5px;  
    margin: 18px 0 0 10px;  
    border: 1px solid #B7647C;  
    border-radius: 4px;
    font-family: inherit;  
    font-size: 15px;
    font-weight: bold;
}
::-webkit-input-placeholder {
  font-style: italic;  
  font-weight: 300;
}
input {  
    margin: 7px;
}
select {
  width: 60%;  
  padding: 5px;
  margin: 20px 40px 10px;  
  border: 1px solid #B7647C;
  border-radius: 3px;  
  font-family: inherit;
  font-size: 15px;
}
.btn {  
    width: 100%;
    text-align: center;
    margin: 20px;
}
button {  
    background-color: #B7647C;
    border-radius: 4px;  
    color: white;
    font-size: 1em;  
    font-weight: bold;
    font-family: inherit;  
    padding: 10px 15px;
    border: 1px solid;
}
button:hover {
  background-color: deeppink;
}
@media only screen and (max-width: 768px) {  
    body{
        background: linear-gradient(rgba(254, 214, 152, 0.47), rgba(254, 214, 152, 0.47)), url(https://wallpapercave.com/wp/Fdh76FQ.jpg) center no-repeat fixed;
        background-size: cover;  
    }
    h1 {
        font-size: 2em;  
    }
    .labels {
        width: 100%;    
        text-align: left;
    }  
    .input-tab {
        width: 100%;    
        float: left;
        margin-left: -40px;  
    }
    .input-field {    
        width: 100%;
    }  
    select {
        width: 60%;  
    }
    .btn {    
        width: 100%;
        margin: auto;  
    }
}
.input_container {
    display: flex;	
    justify-content: center;	
    margin-top: 10px;
}
</style>
