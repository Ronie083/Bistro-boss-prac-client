import Headings from "../../../Components/Headings/Headings";


const Recommends = ({item}) => {

    return (
        <div>
            <Headings
            subHeading={'Should try'}
            heading={'Chef Recommends'}></Headings>
            Recommends:{item.length}
        </div>
    );
};

export default Recommends;