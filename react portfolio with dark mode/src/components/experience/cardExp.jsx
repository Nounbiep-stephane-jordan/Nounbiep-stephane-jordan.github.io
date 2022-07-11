import React from 'react'

function CardExp({title,text1,text2,darkmode}) {
  const styles={
    color:darkmode?"white":null
 }
  return (
    <div className="individual-exp">
    <div className="exp-circle"><span>{title}</span></div>
    <div className="exp-text">
       <span style={styles}>{text1}</span>
       <span>{text2}</span>
    </div>
</div>
  )
}

export default CardExp