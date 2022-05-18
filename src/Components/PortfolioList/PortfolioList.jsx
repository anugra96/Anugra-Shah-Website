import "./PortfolioList.scss";

export default function PortfolioList({title, active, setSelected, id}) {
    
    return (
        <li id="portfolioList" className={active ? "portfolioList active" : "portfolioList"} onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}