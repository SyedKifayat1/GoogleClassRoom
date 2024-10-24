import React from 'react'
import './card.css'
const Card = ({courseName,batch,teacher,avatar,classAddress,contentAddress}) => {
  return (
    <div class="card">
        <div class="card-header">
            <h2>Quran Translation 3</h2>
            <p>BS CE 22</p>
            <p>Muhammad Akhlaq</p>
            <div class="avatar">M</div>
        </div>
        <div class="card-content"></div>
        <div class="card-footer">
            <i class="fas fa-camera"></i>
            <i class="fas fa-folder"></i>
        </div>
    </div>
  )
}

export default Card