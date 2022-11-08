import * as C from "./styles";

const characters = ({data})=> {
    return (
        <>
            <C.charactersCard>
                <C.titleCard>{data.name}</C.titleCard>
                <C.containerImgCard>
                    <C.imgCard src={data.img} alt="" style={{width:"100px"}}/>
                </C.containerImgCard>
            </C.charactersCard>
        </>
    );
};

export default characters;