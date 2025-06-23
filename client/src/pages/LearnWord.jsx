




import React from 'react';
import image from "../assets/thank you.png"
import sorry from "../assets/sorry.png"
import family from "../assets/family.png"
import goodbye from "../assets/goodbye.png"
import house from "../assets/house.png"
import hello from "../assets/hello.png"
import iloveyou from "../assets/i love you.png"
import love from "../assets/love.png"
import no from "../assets/no.png"
import please from "../assets/please.png"
import yes from "../assets/yes.png"

const WordCard = ({ imgSrc, altText, word }) => {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imgSrc}
          alt={altText}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{word}</h5>
        </div>
      </div>
    </div>
  );
};

const LearnCommonWords = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Learn Common Words</h1>
      <div className="row">
        <WordCard imgSrc={image} altText="thank you" word="Thank you" />
        <WordCard imgSrc={sorry} altText="sorry" word="Sorry" /> 
        <WordCard imgSrc={family} altText="family" word="Family" />
        <WordCard imgSrc={goodbye} altText="goodbye" word="Goodbye" />
        <WordCard imgSrc={house} altText="house" word="House" />
        <WordCard imgSrc={hello} altText="hello" word="Hello" />
        <WordCard imgSrc={iloveyou} altText="i love you" word="i love you" />
        <WordCard imgSrc={love} altText="love" word="Love" />
        <WordCard imgSrc={no} altText="no" word="No" />
        <WordCard imgSrc={please} altText="please" word="Please" />
        <WordCard imgSrc={yes} altText="yes" word="Yes" />
      </div>

    </div>
  );
};

export default LearnCommonWords;
