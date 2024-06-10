
const Footer = () => {

    const getCurrentYear = new Date() ;

  return (
    <div className="">

        <footer className="footer p-10 bg-[#CCCCFF] text-base-content">
            <div className="footer gro gap-10 lg:pl-64 lg:gap-0 bg-[#CCCCFF] text-base-content">

                <aside>
                    <img className="w-20 h-20 rounded-full" src={"https://static.vecteezy.com/system/resources/previews/007/121/544/non_2x/customer-retention-and-returning-clients-line-icon-vector.jpg"} alt="" />
                    <p>EmployeeFlow Ltd.<br/>Providing reliable tech since 1992</p>
                </aside> 

                <nav>
                    <h6 className="footer-title text-xl">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 

                <nav>
                    <h6 className="footer-title text-xl">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 

                <nav>
                    <h6 className="footer-title text-xl">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </div>
        </footer>

        <footer className="footer gro  footer-center p-4 bg-[#50506b] text-white">
            <aside>
                <p>Copyright © {getCurrentYear.getFullYear()} - All right reserved by EmployeeFlow LTD .</p>
            </aside>
        </footer>

    </div>
  );
};

export default Footer;
