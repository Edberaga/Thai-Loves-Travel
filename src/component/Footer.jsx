import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../assets/styles/footer.scss'

const Footer = () => {
  const date = new Date;
  const currentYear = date.getFullYear();
  console.log(currentYear);

  return (
    <footer>
        <div className="container social-media">
            <div className="social-icon">
                <FacebookRoundedIcon/>
            </div>
            <div className="social-icon">
                <InstagramIcon/>
            </div>
            <div className="social-icon">
                <TwitterIcon/>
            </div>
            <div className="social-icon">
                <YouTubeIcon/>
            </div>
        </div>
        <p>
            All right Reserved © {currentYear}. 
            Powered by <a target='_blank' href='https://saysheji.org/'>Saysheji</a>.
        </p>
    </footer>
  )
}

export default Footer