import './BagHeader.css';

function BagHeader() {
    return (
        <>
            <div className='bg_top_navigation row m-0' style={{ height: "61px", paddingTop: "17px", borderBottom: "1px solid #E6E6E6", position: "fixed", background: "white", zIndex: "1" }}>
                <div className="col-4 text-center">
                </div>
                <div className="col-4 text-center">
                    <p style={{ fontSize: "20px" }}><b>Shopping Bag</b></p>
                </div>
                <div className="col-4" style={{ textAlign: "right" }}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABSpJREFUWAnVmH9MW1UUxynlNyWDYekMxMLiUvaHPxKghcbyYwRQ9A/NFrYYEhQi/2l0M/iXIcskmcTpgj8XTYyRmI0l+wtZiECAgQKpcZos4h8aXRNU/BGUtrBCW7/nrqfpe32M1/r0lZuUc+69557zeefde957GMLhsDFtD7X0PcQqUPcccEYiGW5vb9/v9XrvDoVC+4xG4+8Wi2VlZGTEm4iPtra24o2NjQPkIzMz87fS0tKV4eFhn1ofht32cFNT030+n+8pBHgUTu+VOQ6j/1V6evqnRUVF74+Pj6/I5kXX5XI9GAgEyEc74h2U2YQNBoObfJhMpg8mJyd/kc1LujsCNzc3l62vr59FkONYYZCsUugg6CaG37HZbKc5Yy0tLda1tbVXAXlUjQ/Y+HHn3rJarWdw5zYUwqQpAtfX1z/k9/svY4FZtsgLsB8x9hd+dwGkAjILv2jD/A1k6vHt7e3yzc3NS7DZH52Egvl1iJ/wIx9mzJdDSnyg/3VxcfETuGM3oUtaHLDT6XwEt+8KrDIjlnTLrmC/vVtdXT03NDS0zR56enrylpeXW2F/EoGdPA65hjUmjPEZCeOWX87KynoPWZ/v7+8Psm1HR4fJ4/G04QJPwd7O45CrhYWFromJie9jxqQZRmZtyOznMNgXMVrJyck5MTc3R2N3bLW1tU8Gg8ELCJobawhwD0CPz8/PL8WOK+nw0QUfb8NHDs1j7Xc42HWjo6N/s72krAH2Y0wIWBj/UFJS4lADS84WFhY+yc/Pb8C6P9g59Ou4tQ41sBEfH2VnZ7dCD1Af4LbV1dVXSOcW3RJ1dXXHtra2LkYmfHl5ec7Z2dkbbKhWNjQ03I8L/wz2HrPZ3Do2Nvan2rVsZ7fbn8dhf436uOhgQUHBA1NTU8vUj2YYe+hFGqCGk3o+GVhaOzMz801ubu6RZGHJx9LS0nmATpKOLBtR+58hnZo4FChhBzBRdXso7RaCnYvoSYlkLzY2GA75BRzmZhoD2wmIU6SLDOPBcAQ619qZ2E1ORnq0srKyq4jrp9gAtlBNJ10AY+Ae6lBD+fnytqbvX3pwYFu4mQLn4jDpAhgb3MITkL/G6HqrtxgAjCbSBTCuJPryAV1MsKGeEnc+xPHBJXQBjMGfeQJG5azrLQF5iBlQuW6SLoBxIq/zBFLfwrqeEm+Jh5G8gxGGLbwQfUu6AO7q6voCV8MF3orXwSY9YSk2Kld1DMM1fgMUwL29vSEAX2IDvGUNTE9Pc5nj4f9VDg4ODqNifUhBMzIyhCRdAJOCx98AoMU7KG6Fva+v7yyN69UaGxvDgO7F3j3d3d0dTWb0XYLAHA7HS3hbGmBIGJ9cXFwc4n4qSAkwAdXU1FxEho8xXKpBR7cEA1ZUVDwN/Rr3kfHXkfnnuK+3jAOmR2JlZeVjqQodB0wZpBKSqtCKwKkMvSNwqkLHVQkClbfOzs58fB2PYtzFc8lUD3z6nMGjn17E5Z/17JZlAA+Nc/jyeJkHWN4xw2yk1Z4G7LPwuRsshc2K2DJCVKoCJuudoPFpThCqGrL2JgzFF/EuCyjDZBvXVG2J2FVK2wPP+hfwma8YIHatFrrqDHMwpUzji/uNRDLNvpKRCQNTED2hkwLWEzppYL2gEz50BCpvSgfR7XaLf9IkUHvlbrkvqcn/KsPsUWlP81wCtZeXyKWkJmsCTBF2gk6g9spBuS+pyZpsCfZMkrcHtsR/8iGrWYYZmjJdVVX1MPe1lppnWGtAuT/NMywPoHX/HxrJY/DjbwP8AAAAAElFTkSuQmCC" alt="#" style={{ width: "30px", height: "30px", marginLeft: "20px", marginRight: "10px" }} />
                </div>
            </div>
            <div className="bg_top_navigation text-center px-4" style={{ background: "white", top: "61px", position: "sticky" }}>
                <h6 className="m-0 p-2" style={{ fontSize: "16px" }}>THis shipping charge on the below order is <span className="text-danger">₹99</span>, Add <span className="text-danger">₹990</span> more to enjoy free shipping!</h6>
            </div>

            {/* <div className=" text-center" style={{ background: "white", top: "61px", position: "sticky" }}>
                <h6 className="m-0 p-2" style={{ fontSize: "16px" }}>THis shipping charge on the below order is <span className="text-danger">₹99</span>, Add <span className="text-danger">₹990</span> more to enjoy free shipping!</h6>
            </div> */}
        </>
    );
}

export default BagHeader;




