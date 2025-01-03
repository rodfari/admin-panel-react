import "./Auth.sass";
import Icon from "../../components/Template/Icon";

const Auth = () => {
  return (
    <main className="auth-page">
      <div className="left">
        <div className="content">
          <h1>Welcome to the panel.</h1>
          <p>copyright &copy; 2025</p>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h1>
            Admin<span>Panel</span>
          </h1>
          <form>
            <input type="email" placeholder="Email" />
            <div className="error"> 
              User must be at least 2 characters long.
            </div>
            <input type="password" placeholder="Password" />
            <div className="error">
              Password must be at least 6 characters long.
            </div>
            <button>
              <Icon name="icon-log-in" /> &nbsp; Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
