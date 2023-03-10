import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div className="style">
            <h1>GET YOUR FOOD DELIVERED</h1>
            <div className="categories style">
            {['BURGER', 'ITALIAN', 'SALAD', 'APPETIZER', 'DESERT', 'PIZZA', 'SEAFOOD', 'CHINESE', 'ALL']
            .map((category, index) => <Filter category = {category} key={index}/>)}
        </div>
        </div>
    )
}
export default AllCategories;