import MySubmit from "./MySubmit";
import NoteSubmit from "./NoteSumbit";
import Star from "./Star";

const MyCard = () => {
    return (
        <section className="card">
            <section className="star">
            <>
              <Star/>
         </>
            </section>
            <h1 className="h1">How did we do?</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim iusto repellendus quia vel dignissimos cum voluptates dolorem rerum reprehenderit!</p>
            <section className>
              
                <>
                <NoteSubmit/>
                </>

            </section>
                
            <section className="btn">
                <>
                    <MySubmit/>
                    </>
            </section>
        </section>
    );
};

export default MyCard;
