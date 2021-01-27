import img from '../images/landingPage/illustrations-empty-grey.png'

export default function Cart(props) {
    return (
        <>
            { props.option === 0 ? (
                <div>
                    <div className="divMargin">
                        <span className="addWeight">Bag</span> <span className="highlightQuantity"> 0 </span>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            ) : (
                    <div className="weightAndMargin">
                        You dont have any past order
                    </div>
                )
            }
        </>

    );
}