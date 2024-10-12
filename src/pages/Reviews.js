import { useState } from 'react';
import './Reviews.css'

import mariam from '../images/members/mariami.jpg'
import luka from '../images/members/luka1.jpg'
import salome from '../images/members/salo.jpg'
import sesili from '../images/members/sesili.jpg'
import rezy from '../images/members/rezy.jpg'

import members from '../assets/reviewsData.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, text } = members[index];
  let image;
  let description;

  if(index === 0) {
    image = mariam;
  } else if(index === 1) {
    image = luka;
  } else if (index === 2) {
    image = salome;
  } else if (index === 3) {
    image = sesili;
  } else if (index === 4) {
    image = rezy;
    description = 'Our informal member of the team is mostly bringing our project to life through coding and technical implementation. He also works on the finalization of the visual side of our task and offering web site for the given project.'
  }

  const checkNumber = (number) => {
    if(number > members.length - 1) {
      return 0;
    }

    if(number < 0) {
      return members.length - 1;
    }

    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  console.log(name, job, text)

  return(
    <main>
      <section className='review-contianer'>
        <div className='review-title'>
          <h2 className='about-title'>Our Members</h2>
          <div className='underline'></div>
        </div>
        <article className='review-article'>
          <div className='review-img'> 
            <img src={image} alt={name} className='review-member-img'/>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </article>
      </section>
    </main>
  )
};

export default Reviews;