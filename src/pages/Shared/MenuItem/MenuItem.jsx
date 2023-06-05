

const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="flex space-x-2 mb-12">
           <img style={{borderRadius:'0 160px 160px 160px'}} className="w-[80px]" src={image} alt="" /> 
           <div>
                <h3 className="uppercase">{name}............</h3>
                <p className="text-small">{recipe}</p>
           </div>
           <p className="text-yellow-300">${price}</p>
        </div>
    );
};

export default MenuItem;