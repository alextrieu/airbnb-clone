import React from 'react'

export default function Footer() {
  return (
    <div className='footer-main-container'>
        <div className='footer-container'>
            <div className='footer-content'>
                <p>Support</p>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Help Centre</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">AirCover</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Safety information</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Supporting people with disabilities</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Cancellation options</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Our COVID-19 Response</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Report a neighbourhood concern</a>
            </div>
            <div className='footer-content'>
                <p>Community</p>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Airbnb.org: disaster relief housing</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Support Afghan refugees</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Combating discrimination</a>
            </div>
            <div className='footer-content'>
                <p>Hosting</p>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Try hosting</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">AirCover for Hosts</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Explore hosting resources</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Visit our community forum</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">How to host responsibly</a>
            </div>
            <div className='footer-content'>
                <p>Airbnb</p>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Newsroom</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Learn about new features</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Letters from our founders</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Careers</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Investors</a>
                <a href="https://www.airbnb.ca/help/home?from=footer" target="_blank">Gift cards</a>
            </div>
        </div>
        <hr className='footer-divider'></hr>
        <div className='footer-terms'>
            <div>
                <ul className='footer-tos'>
                    <li>© 2022 Airbnb, Inc.</li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            <div className='footer-items'>
                <div className='footer-site-options'>
                    <div><i class="fa-solid fa-globe footer-icon"></i><span>English</span></div>
                    <div><i class="fa-solid fa-dollar-sign footer-icon"></i><span>CAD</span></div>
                </div>
                <div className='footer-social-media'>
                    <i class="fa-brands fa-facebook-f"><a href="#" target="_blank"></a></i>
                    <i class="fa-brands fa-twitter"><a href="#" target="_blank"></a></i>
                    <i class="fa-brands fa-instagram"><a href="#" target="_blank"></a></i>
                </div>
            </div>
        </div>
    </div>
  )
}
