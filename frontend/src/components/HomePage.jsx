export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <h1 className="home-card-title card-title">Welcome to Auth</h1>
          <p className="card-description">A modern authentication solution</p>
          <div className="blog-container">
            <div className="blog-card">
              <div className="blog-card-header">
                <div className="icon-box">
                  <img src="frontend-icon.png" alt="Code Icon" />
                </div>
                <div>
                  <h3 className="blog-card-title">Frontend Authentication</h3>
                  <p className="blog-card-description">
                    Implementing client-side authentication flow
                  </p>
                </div>
              </div>
              <div className="blog-card-content">
                <p>
                  Learn about implementing authentication in React with secure
                  token management and protected routes.
                </p>
                <a href="#frontend-blog" className="continue-button blog">
                  Read Article →
                </a>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-header">
                <div className="icon-box">
                  <img src="frontend-icon.png" alt="Code Icon" />
                </div>
                <div>
                  <h3 className="blog-card-title">Frontend Authentication</h3>
                  <p className="blog-card-description">
                    Implementing client-side authentication flow
                  </p>
                </div>
              </div>
              <div className="blog-card-content">
                <p>
                  Learn about implementing authentication in React with secure
                  token management and protected routes.
                </p>
                <a href="#frontend-blog" className="continue-button blog">
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
