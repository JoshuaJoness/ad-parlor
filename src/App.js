import React from 'react';
import Nav from './components/Nav'
import imageOne from './creative_planning_development.svg'
import arrow from './arrow.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import youtube from './display-youtube.svg'
import logo from './hills-logo.svg'

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{display:'grid', gridTemplateColumns:'55% 45%', marginTop: 120, marginLeft: 80}}>
        <div style={{color:'#34495E'}}>
          <p style={{fontSize:60}}>We are</p>
          <p style={{fontSize:60, fontWeight:600, marginTop:-50}}>experts at driving</p>
          <p style={{fontSize:60, fontWeight:600, marginTop:-50}}>ROI & ROAS online</p>
          <p style={{fontSize:32}}>Flexible solutions, creative minds and smart tech<br></br>for successful digital marketing strategies</p>
          <button style={{height:60, width: 320, backgroundColor:'#FF3366', border:'none', borderRadius: '6px', color:'white', fontSize:20, fontWeight:550}}>GET STARTED</button>
        </div>
        <img src={imageOne} alt="Drawing of man presenting ad mock-ups"></img>
      </div>
      <div style={{height:'100vh', backgroundColor:'#34495E', textAlign:'center', paddingTop:150, color:'white'}}>
        <p style={{fontSize:60, fontWeight: 500}}>Media Buying</p>
        <div style={{display:'grid', gridTemplateColumns:'10% 80% 10%', lineHeight:1.5}}>
          <div></div>
          <p style={{fontSize:32}}>AdParlor does complex media buying better than anyone else out there. Our unique tech-enabled approach to blending media buying with tailored creative results in improved ROI and ROAS fro your paid digital campaigns</p>
          <div></div>
        </div>
        <img src={arrow} alt="arrow pointing down" style={{transform: "rotate(-90deg)", marginTop:10}}></img>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'55% 45%', marginTop: 200, marginLeft: 80, height:'100vh'}}>
        <div style={{color:'#34495E'}}>
          <p style={{fontSize:45, letterSpacing:1}}>Facebook Advertising</p>
          <p style={{fontSize:22, lineHeight:1.5}}>Knowing the ins and outs of Facebook is not only important but crucial to the success of your paid media strategy. As one of Facebook's first strategic partners, we use a combination of proprietary technology, unique data and years of experience to maximize the efficiency and drive results on the world's largest social media platform.</p>
          <button style={{height:75, width: 240, backgroundColor:'transparent', border:'1px solid #34495E', borderRadius: '6px', color:'#34495E', fontSize:20, fontWeight:450, marginTop: 10}}>CASE STUDY</button>
        </div>
        <img src={facebook} alt="Drawing of woman using Facebook on her phone"></img>
      </div>
      <hr style={{color:'#FAFAFA'}}></hr>
      <div style={{display:'grid', gridTemplateColumns:'45% 55%', marginTop: 120, marginLeft: 80, height:'100vh'}}>
        <img src={instagram} alt="Drawing of woman using Instagram on her phone"></img>
        <div style={{color:'#34495E', marginLeft:90, marginTop:70}}>
          <p style={{fontSize:45, letterSpacing:1}}>Instagram Advertising</p>
          <p style={{fontSize:22, lineHeight:1.5}}>AdParlor was on of Instagram's inaugural Ads API Partners. What does that mean? We have experience growing bran awareness, consideration and conversions for both large brands and direct response advertisers on Instagram (and beyond!)</p>
          <button style={{height:75, width: 240, backgroundColor:'transparent', border:'1px solid #34495E', borderRadius: '6px', color:'#34495E', fontSize:20, fontWeight:450, marginTop: 10}}>CASE STUDY</button>
        </div>
      </div>
      <hr style={{color:'#FAFAFA'}}></hr>
      <div style={{display:'grid', gridTemplateColumns:'55% 45%', marginTop: 200, marginLeft: 80, height:'100vh'}}>
        <div style={{color:'#34495E', marginRight:20, lineHeight:2}}>
          <p style={{fontSize:45, letterSpacing:1}}>Programmatic Display & YouTube</p>
          <p style={{fontSize:22, lineHeight:1.5}}>Programmatic display enables you to serve the right ads to the right people at the right time and, more importantly, the right stage of the customer journey. At AdParlor we have a wealth of experience to plan, deliver, optimize and report on RTB campaigns, to achieve your business KPIs.</p>
          <button style={{height:75, width: 240, backgroundColor:'transparent', border:'1px solid #34495E', borderRadius: '6px', color:'#34495E', fontSize:20, fontWeight:450, marginTop: 10}}>CASE STUDY</button>
        </div>
        <img src={youtube} alt="Drawing of woman using Facebook on her phone"></img>
      </div>
      <div style={{height:'100vh', backgroundImage:"url('./BG_Hills_Banner.jpg')", backgroundSize: 'cover', paddingTop: 600}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 2fr 1fr'}}>
          <img src={arrow} alt="Arrow pointing left" style={{marginLeft:230, marginTop:80}}></img>
          <img src={logo} alt="Hills logo" style={{width:250, marginTop:20}}></img>
          <div style={{color:'white'}}>
            <p style={{fontSize:20, lineHeight:1.5}}>"As always, Thank You so much for all the great attention to detail, follow up, and just getting thing dones in general! Our paid Social stuff is one of a very few areas that I just don't ever have to worry about becase I know you're always all over it. Thank you!"</p>
            <p style={{marginTop:30, fontSize: 20, fontWeight:500}}>Justin Marksamer, Vice-President, PhotoSquared</p>
          </div>
          <img src={arrow} alt="Arrow pointing right" style={{maringLeft:20, marginTop:80, marginLeft: 70, transform: "rotate(-180deg)"}}></img>
        </div>
      </div>
      <div style={{height:'100vh', textAlign:'center', display:'grid', gridTemplateColumns: '10% 80% 10%', paddingTop: 200}}>
        <div></div>
        <div>
          <p style={{color:'#34495E', fontSize: 60, fontWeight:450}}>Get Started</p>
          <p style={{color:'#34495E', fontSize: 30, letterSpacing:1, lineHeight: 1.5}}>Ready to take your digital media buying to the next level? AdParlor can help you get the best reuslts from paid social, video and display advertising.</p>
          <button style={{marginTop:30, height:60, width: 320, backgroundColor:'#FF3366', border:'none', borderRadius: '6px', color:'white', fontSize:20, fontWeight:550}}>GET STARTED</button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App;
