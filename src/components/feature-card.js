import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-card">
      <img
        alt={props.Icon_alt1}
        src={props.Icon_src1}
        className="feature-card-icon"
      />
      <h4 className="feature-card-text Heading4">{props.heading}</h4>
      <span className="feature-card-text1 Content-Light">{props.text}</span>
      <span className="feature-card-text2">{props.text1}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  Icon_src1: '/external/icon1135-q6iw.svg',
  text1: 'Get started >',
  text: 'Our courses are meticulously designed to provide you with industry-relevant skills that will keep you ahead of the curve.',
  heading: 'Cutting-Edge Curriculum',
  image_alt: 'image',
  Icon_alt1: 'Icon1135',
  Icon_alt: 'Icon1135',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Icon_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bea996e9-5715-46ea-96fb-8ecfea3d65e3/6a87c5e2-3331-4ef6-a50c-20c47b0b36a5?org_if_sml=14238',
}

FeatureCard.propTypes = {
  Icon_src1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  Icon_alt1: PropTypes.string,
  Icon_alt: PropTypes.string,
  image_src: PropTypes.string,
  Icon_src: PropTypes.string,
}

export default FeatureCard
