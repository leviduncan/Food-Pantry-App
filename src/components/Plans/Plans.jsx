import React from 'react'
import ContentCard2 from '../ContentCard2/ContentCard2'
import Hero2 from '../Hero2/Hero2'
import Modal from '../Modal/Modal'

function Plans() {
const title = 'Choose from our many plans'
const subTitle = 'Have no time to prepare food?'

  return (
    <>
    <Modal />
    
    <div className="container">
        <Hero2 title={title} subTitle={subTitle}/>
        <div className="card-deck">
                <ContentCard2 title="Basic"/>
                <ContentCard2 title="Medium"/>
                <ContentCard2 title="Expensive"/>
        </div>
            <div className="row d-flex justify-content-between mb-5">
                
            </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsam. Temporibus quas vitae architecto, cumque iste fugit corrupti corporis neque quia, velit illo non modi nostrum sunt est veritatis libero, a asperiores repellendus dolore aliquid! Modi odit est tempore nesciunt praesentium distinctio quaerat autem explicabo velit, ipsa possimus cum expedita quod fugit nihil eum. Nihil dolore quasi animi blanditiis quia quo, ex quibusdam, ipsam eveniet possimus qui impedit asperiores voluptatibus commodi! Iure repellendus mollitia non inventore autem quidem est itaque laboriosam ducimus porro dignissimos dolorum, doloremque excepturi iusto sed. Dolorem possimus consequatur veniam aperiam quod ea commodi mollitia quam reiciendis, asperiores tenetur perspiciatis, quia illum veritatis repellendus. Nesciunt voluptatem nulla, neque fugit nisi nobis sequi dignissimos minus cum aperiam dolor rerum? Sint, neque repellendus reiciendis eligendi sapiente labore tempore nobis laudantium velit soluta fugit quidem, quos aperiam veritatis saepe mollitia pariatur unde. Earum inventore sit eius nobis, repudiandae porro aliquid?
        </p>
    </div>
    </>
  )
}

export default Plans