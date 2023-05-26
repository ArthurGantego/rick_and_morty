import Card from '../Card/Card.jsx';

export default function Cards({characters}) {
   const handleClose=() => window.alert('Emulamos que se cierra la card')
   return(
      <div style={{display:"flex", justifyContent: "space-between"}}>
         {characters.map(({name, status, species, gender, origin,image}) => {
            return (
            <Card
            name ={name} 
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin}
            image = {image}
            onClose={handleClose}
            />
            );
      })
      }
   </div>
   );
}
