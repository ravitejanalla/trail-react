import './App.css';
import profile from "./image/image1.png";
import email from "./image/email.png";
import pass from "./image/pass.png";
function App() {
  return(
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
          <img src={profile} alt="profile" className="profile"/>
</div>
   
      </div>
      <div>
          <h1>Login page</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="user name" className="name"/> 
          </div>
          <div className="second-input">

</div>
          <div>
            <img src={pass} alt="pass" className="pass"/>
            <input type="password" placeholder="password" classname="name"/> 
          </div>
          </div>
          <div classname="login-button"><br></br>
     <button> Login</button>
     </div>
     <div>
      <p classname="link">
        <a href="a">forgot password</a>
        or
        <a href="a">Signup</a>
      </p>
     </div>
  


    </div>
    </div>
    </div>
   
  );
}
export default App;