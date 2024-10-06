function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', width: '300px' }}>
        <a href="mailto:support@example.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" width="30px" alt="Email" />
        </a>
        <a href="https://github.com/your-github-handle" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <a href="https://www.linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer"
        style={{
        color: '#fff',
        textDecoration: 'none'
        }}>
        <p>&copy; 2024 SerenityScript</p>
      </a>
    </footer>
  );
};

export default Footer;