'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function CoursePayment(props){
    return(
        <main>
             <div className="course-payment" style={{backgroundColor:props.bgColor}}>
            <div className="course-payment-container">
                <div className="course-payment-heading"><h2>{props.feeH}</h2></div>
                <div className="course-payment-contents">
                    <div className="course-payment-box" style={{boxShadow: props.shadowColor}}>
                        <div className="payment-month"><p>{props.weeks}</p></div>
                        <div className="payment-starting">
                            <p>{props.start}</p>
                            <h3>{props.rate}</h3>
                        </div>
                        
                        <hr />
                        <div className="payment-points"><p>{props.sub}</p>
                        <ul>
                            {props.sublist && props.sublist.map((item,index)=>
                           <li key={index}>{item.list}</li>
                           
                            )}
                        </ul>
                        </div>
                       <Link className="course-payment-enroll" href="/enquiry">Enroll now</Link>
                    </div>
                    <div className="course-payment-option">
                        <div className="payment-option-heading"><h3>{props.paymentH}</h3></div>
                        <div className="payment-options-container">
                            {props.payment && props.payment.map((item,index)=>
                            <div className="payment-options-contents" key={index}>
                                <div className="payment-options-topic"><h4>{item.heading}</h4></div>
                              
                                <div className="payment-options-images">
                                {item.images.map((img,idx)=>
                                    <Image src={img.image} alt={img.alt} key={idx} />
                                
                                )}
                                </div>
                            </div>
                           )}
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </main>
    )
}