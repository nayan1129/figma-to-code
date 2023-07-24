import React from 'react'

const Svgchart = () => {
  return (
    <>
      <svg className='svg-width' width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="134" height="134" fill="#DDDDDD" />
      <g id="Dashboard">
        <rect width="1440" height="1024" transform="translate(-440 -770)" fill="#F5F5F5" />
        <g id="TopProductsCard">
          <g id="Card">
            <rect
              id="Card_2"
              x="-60"
              y="-82"
              width="480"
              height="256"
              rx="20"
              fill="white"
              style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
            />
          </g>
          <g id="PieChart">
            <mask
              id="mask0_0_1"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="134"
              height="134"
            >
              <circle id="Ellipse 5" cx="67" cy="67" r="67" transform="rotate(180 67 67)" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect
                id="Rectangle 6"
                x="140.634"
                y="139.307"
                width="145.941"
                height="145.941"
                transform="rotate(180 140.634 139.307)"
                fill="#98D89E"
              />
              <path
                id="Vector 1"
                d="M81.5941 -3.31683L67.6634 66.3366L140.634 37.6941V-6.63367L81.5941 -3.31683Z"
                fill="#EE8484"
              />
              <path
                id="Vector 2"
                d="M140.634 139.307V37.8119L68.3267 65.6733V139.307H140.634Z"
                fill="#F7DC7D"
              />
            </g>
          </g>
        </g>
      </g>
    </svg> 
    </>
  )
}

export default Svgchart
