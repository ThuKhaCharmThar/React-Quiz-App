const Footer = () => {
    return (
        <footer className="footer">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 p-5">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} Eren's Quizz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;