import { Carousel, Space } from "antd"
import { GetServerSideProps } from "next"
import Image from "next/image"
import imageLoader from "../../imageLoader"
import { Character, GetCharacterResults } from "../../types"

function characterPage({character}:{character:Character}){

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };


 

return <div>
    

<img style={{position:'fixed',left:'15rem',top:'5'}} src="https://img.icons8.com/plasticine/100/000000/sharingan.png"/>

<img style={{position:'fixed',left:'61rem',top:'5'}} src="https://img.icons8.com/plasticine/100/000000/sharingan.png"/>
<h1 style={{color:'white',marginLeft:'37rem',marginBottom:'6rem' }}  > {character.name} </h1> 


  <Space style={{marginLeft:'15rem'}} size={30} >

<Image 
unoptimized     
loader={imageLoader}
src={character?.images[0]}
alt={character.name}
width='400px'
height='400px'

 >


</Image>




<Image 
unoptimized     
loader={imageLoader}
src={character?.images[1]}
alt={character.name}
width='400px'
height='400px'
style={{padding:'8rem'}}
 >

</Image>

  </Space>







</div>



}



export const getServerSideProps :GetServerSideProps = async (context)=>{

const res = await  fetch(`https://naruto-api.herokuapp.com/api/v1/characters/${context?.query?.id}`);
const character = await res.json()
return {
props:{

    character
}

}
}

export default characterPage