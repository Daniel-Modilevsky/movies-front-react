import logo  from "../../img/logo.png";

const indexPage =()=>{
    return (
        <div id="container-fullimg">
            <div className="h-container">
                    <img src={logo} alt="" className="logo-t"/>
                <h1 data-aos="zoom-in">Unlimited movies streamer for Covid time </h1>
                <h2 data-aos="fade-up">Ready to watch? Enter your email to create or restart your membership.</h2>
                <section className="center-inline-conteiner">
                    <a data-aos="fade-up" href="/register" className="btn-get-started btn-1 scrollto">Register</a>
                    <a data-aos="fade-up" href="/login" className="btn-get-started btn-2 scrollto">Login</a>
                </section>
            </div>
        </div>
    );

}

export default indexPage;