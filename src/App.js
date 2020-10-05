import React from 'react';
import logo from './logo.svg';
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

function App() {
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
      <body className="body">
        <Navbar></Navbar>
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
      </body>
    </div>
  );
}

export default App;
