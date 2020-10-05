import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Landing } from './Landing/Landing';
import { LogoPage } from './LogoPage/LogoPage';
import { InfoPage } from './InfoPage/InfoPage';
import { Spinner } from './InfoPage/Spinner/Spinner';
import { Rating } from './InfoPage/Rating/Rating';
import { Users } from './InfoPage/Users/Users';
import { ImageContainer } from './InfoPage/ImageContainer';
import { Signup } from './SignupPage/Signup.jsx';
import { Review } from './Reviews/Review';
import { JudgePage } from './JudgePage/JudgePage';
import { FAQ } from './faq/FAQ';
import { ContactUs } from './ContactUs/ContactUs';
import { Footer } from './Footer/Footer';
import gsap, { TimelineMax, TweenMax,Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { ToolBar } from './ToolBar/ToolBar';
import { CommentToolbar } from './CommentToolbar/CommentToolbar';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function App() {
  const [scrollMagic, setScrollMagic] = useState({
      controller: new ScrollMagic.Controller(),
      timelineOne: gsap.timeline(),
      timelineTwo:gsap.timeline(),
  });

  const { controller,timelineOne,timelineTwo } = scrollMagic;
  let triggerRef = null;
  let g = gsap.timeline();
  let [comment,openComment] = useState(false)
  let [color,openColor] = useState(false)

  useEffect(
      
      ()=>{
              
          function f(){
                  timelineOne
                  .to('.nav',{ position:"absolute" , opacity:0,backgroundColor:"transparent",transform:"translateY(-50%)" ,duration:0},0)
                  .to('.nav', { transform:"translateY(0)",position:"fixed" , opacity:1 , ease:Power1.easeInOut ,duration:0.5,backgroundColor:"#6610f2" },0)
                  new ScrollMagic.Scene({
                    triggerElement: triggerRef,
                    offset:'350',
                    duration: "0%"
                  })
                    .setTween(timelineOne)
                    .setPin("#main-header")
                    .addTo(controller);
                  timelineTwo
                  .to('.nav',{ position:"absolute", opacity:1,backgroundColor:"transparent",transform:"translateY(0%)" ,duration:0.5},0)
                  new ScrollMagic.Scene({
                    triggerElement: triggerRef,
                    offset: 0,
                    duration: "0%"
                  })
                    .setTween(timelineTwo)
                    .setPin("#main-header")
                    .addTo(controller)
                    
                if(window.scrollY>350){
                    setTimeout(()=>{g
                      .to('.nav',{ position:"absolute" , opacity:0,backgroundColor:"transparent",transform:"translateY(-50%)" ,duration:0},0)
                      .to('.nav', { transform:"translateY(0)",position:"fixed" , opacity:1 , ease:Power1.easeInOut ,duration:0.5,backgroundColor:"#6610f2" },0)
                      
                    },1000)
                }
          }
          f();
      }
  )

  const openCommentWindow = () =>{
    if(highlightedElement.current)
      highlightedElement.current.style.border = "none"
      if(clickedElement){
        let c= clickedElement
        c.current.style.border = "none"
        setClickedElement(null)
      }
    openComment(!comment)
  }

  const resetAll = () =>{
    if(highlightedElement.current)
      highlightedElement.current.style.border = "none"
    if(clickedElement){
      let c= clickedElement
      c.current.style.border = "none"
      setClickedElement(null)
    }
    openComment(false)
    openColor(false)
  }

  let highlightedElement = useRef(null)

  let [clickedElement,setClickedElement] = useState(null)

  const highlightElement = (e) =>{
    if(e.target.id==="close-button")
      return;
    if(clickedElement==null){
      if(e.target!=highlightedElement.current){
        if(highlightedElement.current)
          highlightedElement.current.style.border = "none"
        highlightedElement.current = e.target;
        e.target.style.border = "thick red solid"
      }
    }
  }

  const openCommentEditor = () =>{

  }

  const clickElement = (e) =>{
    if(e.target.id==="close-button")
      return;
    if(e.target!=clickedElement){
      let c = clickedElement
      if(clickedElement)
        c.style.border = "none"
      e.target.style.border = "thick red solid"
      setClickedElement(e.target);
      openCommentEditor();
    }
    else{
      if(clickedElement)
      {
        let c = clickedElement
        c.style.border = "none"
        setClickedElement(null);
      }
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
      <link rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin />
      <link rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,900,600&display=swap" />
      <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,900,600&display=swap"
      />

      <link rel="preconnect"
      href="https://cdnjs.cloudflare.com"
      crossorigin />
      <link rel="preload"
      as="style"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      </header>
      <body ref={ref=>triggerRef=ref} onMouseMove={(e)=>comment?highlightElement(e):""} onClick={(e)=>comment?clickElement(e):""} className="body" >
        <Navbar resetAll={resetAll} commentMode={comment}></Navbar>
        <Landing></Landing>
        <LogoPage></LogoPage>
        <InfoPage
        header={"CV is cheap. Show me the code."}
        explanationHeader={"Choose a Catalog to build a project with your capability"}
        mainExplanationDescription=
        {
        `Skillsme “Talents Pool” Catalog will get updated every week. This will contain the topic and requirements to complete your project to get rated on. Talents catalog has a time limit of 48 hours from the time you see the question.`
        }
        subExplanationDescription={`Talents Pool Catalog rating is the only rating that will count towards getting recruited by our clients worldwide.`}
        Item={Spinner}
        modalWidth={"30%"}
        textWidth={"50%"}
        ></InfoPage>

        <InfoPage
        header={"Let the world's top 5% coders to endorse your skills."}
        explanationHeader={"Get your project validated and rated by world's top 5% coders"}
        mainExplanationDescription=
        {
        `On Skillsme, only the world's top 5% coders that are fully verified by Skillsme can be invited to become a Skillsme Judge. Skillsme Judges are the only qualified people to rate your projects. Through this, we ensure that every rating on Skillsme is credible and trusted by various companies and recruiters worldwide.`
        }
        Item={Rating}
        modalWidth={"40%"}
        textWidth={"40%"}
        reverse={true}
        ></InfoPage>

        <InfoPage
        header={"Skillsme will help you engage up to 10K+ companies weekly"}
        explanationHeader={"Those with respectable Ratings will be referred to companies"}
        mainExplanationDescription=
        {
        `Skillsme users with the best rated project in the current week will be automatically referred to companies who are seeking for tech talents. If your skill set matches any of our clients requirements, your profile will be referred to them directly by Skillsme. There is no need to put any effort on your CV anymore with Skillsme.`
        }
        Item={Users}
        modalWidth={"40%"}
        textWidth={"45%"}
        ></InfoPage>

        <InfoPage
        header={"Much more efficient than traditional CV recruiting"}
        explanationHeader={"Skillsme Ratings will give you a higher chance of an interview invitation"}
        mainExplanationDescription=
        {
        `Complete our Talent Pool Catalog to have a higher chance of a job interview invitation. With Skillsme, companies are constantly searching for candidates with high ratings or show ability to improve.`
        }
        subExplanationDescription={
          `On Skillsme, you can also accept multiple interviews from companies worldwide and also manage your upcoming interview on Skillsme.`
        }
        Item={ImageContainer}
        modalWidth={"40%"}
        textWidth={"45%"}
        reverse={true}
        ></InfoPage>

        <Signup></Signup>
        <Review></Review>
        <JudgePage></JudgePage>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <Footer></Footer>
        <ToolBar openCommentWindow={openCommentWindow}></ToolBar>
        <CommentToolbar clicked={clickedElement!=null}></CommentToolbar>
      </body>
    </div>
  );
}

export default App;
