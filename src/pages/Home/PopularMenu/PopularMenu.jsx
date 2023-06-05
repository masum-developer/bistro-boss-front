
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu && menu.filter(it=> it.category === 'popular');
    
    return (
        <section>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            >
            </SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-4">
                {
                 popular && popular.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }

            </div>
        </section>
    );
};

export default PopularMenu;