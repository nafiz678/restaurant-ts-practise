const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 justify-end items-start gap-10">

        {/* Contact Us Section */}
        <div className="justify-self-end">
          <h3 className="text-xl font-semibold mb-4">
            CONTACT US
          </h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold mb-4">
            Follow US
          </h3>
          <p className="mb-4">Join us on social media</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.465.099 2.797.143v3.24h-1.917c-1.506 0-1.798.716-1.798 1.765v2.316h3.596l-.468 3.622h-3.128V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.331 3.608 1.306.975.975 1.244 2.243 1.306 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.331 2.633-1.306 3.608-.975.975-2.243 1.244-3.608 1.306-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.331-3.608-1.306-.975-.975-1.244-2.243-1.306-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.331-2.633 1.306-3.608C5.518 2.494 6.785 2.225 8.151 2.163c1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.012 7.053.07 5.777.128 4.51.396 3.37 1.537c-1.14 1.14-1.409 2.407-1.467 3.683C1.621 6.947 1.609 7.356 1.609 12s.012 5.053.07 6.332c.058 1.276.327 2.543 1.467 3.683 1.14 1.14 2.407 1.409 3.683 1.467 1.276.058 1.685.07 6.331.07s5.053-.012 6.331-.07c1.276-.058 2.543-.327 3.683-1.467 1.14-1.14 1.409-2.407 1.467-3.683.058-1.276.07-1.685.07-6.331s-.012-5.053-.07-6.331c-.058-1.276-.327-2.543-1.467-3.683C18.936.396 17.669.128 16.393.07 15.113.012 14.704 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.953 4.569c-.885.39-1.83.654-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.952-2.178-1.548-3.594-1.548-2.719 0-4.92 2.201-4.92 4.917 0 .39.044.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.107-6.102 2.107-.396 0-.79-.023-1.175-.067 2.189 1.394 4.768 2.206 7.557 2.206 9.054 0 14.002-7.496 14.002-13.986 0-.21-.006-.423-.015-.63.961-.689 1.797-1.56 2.457-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>

      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">
          Copyright &copy; CulinaryCloud. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
