// import { useNavigate } from "react-router-dom";

export default function HomePage() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   console.log("logout");
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  return (
    <>
      <div className="container">
        <div className="card-container">
          <h1 className="home-card-title card-title">Welcome to Auth</h1>
          <p className="card-description">A modern authentication solution</p>
          <div class="blog-container">
            <div class="blog-card">
              <div class="blog-card-header">
                <div class="icon-box">
                  <img src="frontend-icon.png" alt="Code Icon" />
                </div>
                <div>
                  <h3 class="blog-card-title">Frontend Authentication</h3>
                  <p class="blog-card-description">
                    Implementing client-side authentication flow
                  </p>
                </div>
              </div>
              <div class="blog-card-content">
                <p>
                  Learn about implementing authentication in React with secure
                  token management and protected routes.
                </p>
                <a href="#frontend-blog" class="continue-button blog">
                  Read Article →
                </a>
              </div>
            </div>

            <div class="blog-card">
              <div class="blog-card-header">
                <div class="icon-box">
                  <img src="frontend-icon.png" alt="Code Icon" />
                </div>
                <div>
                  <h3 class="blog-card-title">Frontend Authentication</h3>
                  <p class="blog-card-description">
                    Implementing client-side authentication flow
                  </p>
                </div>
              </div>
              <div class="blog-card-content">
                <p>
                  Learn about implementing authentication in React with secure
                  token management and protected routes.
                </p>
                <a href="#frontend-blog" class="continue-button blog">
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          Created by <a href="https://x.com/4334Tuhin">Tuhin Poddar</a>
        </div>
      </div>
    </>
  );
}
