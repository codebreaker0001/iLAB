

import './footer.css'
export default function Footer() {
    return (
        <div className='footer-main'>
            
            <hr className='hr1'/>
            <div className='footer-mid-main'>
                <div className='footer-mid'>
                    <p> <img src="/lab1.jpg" alt="" /> </p>

                    <div className='footer-mid-1'>
                        <li>Protocol</li>
                        <li>Docs</li>
                        <li>Security</li>
                        <li>FAQ</li>
                    </div>

                </div>

                <div className='footer-mid'>
                    {/* <div className='footer-end-left'><img alt='img1' src='/socialicons.svg' /></div> */}
                    <div className='footer-end'>
                        <div className='footer-end-right'>
                            <li>Branding</li>
                            <li>Blog</li>
                        </div>
                        <div className='footer-end-right'>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Contact</li>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <p>© 2023. EtherFlow Co. All rights reserved. </p>
            </div>
        </div>
    )
}