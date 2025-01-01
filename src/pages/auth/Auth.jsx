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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
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
