import img from "../images/landingPage/group-5.png";

export default function Options(props) {
    const clicked = (idx) => {
        props.setIndex(idx)
    }
    return (
        <div className="optionDiv">
            {
                props.optionsArray.map((option, idx) => {
                    return (
                        <div className="optionDiv" key={idx} >
                            <button id="optionButton"
                                onClick={() => clicked(idx)}
                                style={{ fontWeight: "450" }}
                            >{option.tag} ({option.products})</button>
                        </div>

                    );
                })
            }
            <div className="viewAll">View all categories <img src={img} alt="" /></div>
        </div >
    );
}