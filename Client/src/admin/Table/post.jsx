import React from "react"

export default function Post(props) {
    return (
        <React.Fragment>
            <div className="col-md-3 col-sm-5 col-8 mx-auto my-3">
               <div className="card">
                    <div className="img-container">
                {/* <img src={props.body} alt="product" className="card-img-top style={{width: "300px", height: "400px"}}" /> */}
                <div>{props.body}</div>
                    </div>
                    <div className="card-footer d-flex flex-column">
                        <p className="align-self-center mb-2">
                            {props.title}
                        </p>
                    </div>
                    <div className="m-3">
                        <button 
                        className="btn btn-outline-danger w-50" 
                        onClick={() => props.deletePost(props.id)}
                        >حذف</button>
                        <button
                        className="btn btn-outline-warning w-50" 
                        onClick={() => props.deletePost(props.id)}
                        >ویرایش</button>
                    </div>
               </div>
            </div>

        </React.Fragment>
    )   
}