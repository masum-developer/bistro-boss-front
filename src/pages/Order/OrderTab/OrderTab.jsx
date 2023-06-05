import FoodCard from "../../../components/FoodCard/FoodCard";
// implement pagination here
const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            {
                items && items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;