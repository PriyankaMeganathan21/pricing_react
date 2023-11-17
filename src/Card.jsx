function Card(props){
    return <>
    <div className="col-lg-4">
             <div className="card mb-5 mb-lg-0">
               <div className="card-body">
                 <h5 className="card-title text-muted text-uppercase text-center">{props.detail.plan}</h5>
                 <h6 className="card-price text-center">${props.detail.price}<span>/month</span></h6>
                 <hr />
                 <ul className="fa-ul">
                   <li ><span className="fa-li"><i className="fa fa-check"></i></span>{props.detail.user}</li>
                   <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.detail.storage}</li>
                   <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.detail.projectPublic}</li>
                   <li><span className="fa-li"><i className="fa fa-check"></i></span>{props.detail.access}</li>
                   <li className={props.detail.projectEnabler?"":"text-muted"}><span className="fa-li"><i className={props.detail.projectEnabler?"fa fa-check":"fa fa-times"}></i></span>{props.detail.projectPrivate}
                     </li>
                     <li className={props.detail.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.detail.supportEnabler?"fa fa-check":"fa fa-times"}></i></span>{props.detail.support}
                     </li>
                     <li className={props.detail.subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.detail.subdomainEnabler?"fa fa-check":"fa fa-times"}></i></span>{props.detail.subdomain}
                     </li>
                   <li className={props.detail.reportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.detail.reportEnabler?"fa fa-check":"fa fa-times"}></i></span>{props.detail.report}
                     </li>
                 </ul>
                 <div className="d-grid">
                   <a href="/#" className="btn btn-primary text-uppercase">Button</a>
                 </div>
               </div>
             </div>
           </div>
    </>

}
export default Card